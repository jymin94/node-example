import express from "express";
import {formatNumber, getDayOneTotal} from "./covid";
const app = express();
const port = 8080;

app.get("/", (req, res) => res.send('Hello World!'));

app.listen(port, () => {
	// tslint:disable-next-line:no-console
	console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/covid", async (req, res) => {
	const confirmedCases: number = await getDayOneTotal();
	res.send(`There are ${formatNumber(confirmedCases)} confirmed cases in the United States`);
});
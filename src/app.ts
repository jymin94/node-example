import express from "express";
import axios, { AxiosResponse } from "axios";
const app = express();
const port = 8080;

const covidTrackerHttpClient = axios.create({
	baseURL: "https://covidtracking.com/api/v1/"
});

app.get("/", (req, res) => res.send('Hello World!'))

app.listen(port, () => {
	// tslint:disable-next-line:no-console
	console.log(`Example app listening at http://localhost:${port}`)
});

app.get("/covid", (req, res) => {
	covidTrackerHttpClient.get('/us/current.json')
	.then((response: AxiosResponse) => {
		// console.log(response.data);
		const covidData = response.data;
	// tslint:disable-next-line:no-console
		console.log(covidData[0].positive);
		res.send(`Currently there are ${covidData[0].positive} positive cases in the US.`);
	})
	.catch(error => {
		// tslint:disable-next-line:no-console
		console.log(error)
	});
});
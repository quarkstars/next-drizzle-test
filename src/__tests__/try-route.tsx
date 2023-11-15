import helloRoute from "@/app/api/hello/route";
import { createMocks } from "node-mocks-http";

test("Try a route", async () => {
	const { req, res } = createMocks({
		method: "GET",
	});

	await helloRoute(req, res);
	const responseData = JSON.parse(res._getData());

	expect(res._getStatusCode()).toBe(200);
	expect(responseData).toEqual({ message: "Hello from Next.js!" });
	console.log("STATUS", res._getStatusCode());
	console.log("RESPONSE", responseData);
});

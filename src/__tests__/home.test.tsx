import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
	it("renders a heading", () => {
		render(<Home />);

		const myElem = screen.getByText("Docs");
		//@ts-ignore TODO: Fix this
		expect(myElem).toBeInTheDocument();
	});
});

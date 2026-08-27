import { describe, it, expect, beforeEach } from "vitest";
import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";

describe("Stone Age India Explorer", () => {
    let dom;
    let document;
    let window;

    beforeEach(() => {
        const htmlPath = path.resolve(
            __dirname,
            "../../frontend/stone-age-india/index.html"
        );

        const jsPath = path.resolve(
            __dirname,
            "../../frontend/stone-age-india/script.js"
        );

        const html = fs.readFileSync(htmlPath, "utf-8");
        const js = fs.readFileSync(jsPath, "utf-8");

        dom = new JSDOM(html, {
            runScripts: "dangerously",
            resources: "usable"
        });

        document = dom.window.document;
        window = dom.window;

        dom.window.eval(js);
    });

    it("renders the Stone Age page", () => {
        expect(document.title).toContain("Stone Age of India");

        const heading = document.querySelector("h1");

        expect(heading).not.toBeNull();
        expect(heading.textContent).toContain("Stone Age of India");
    });

    it("contains all three major Stone Age periods", () => {
        const content = document.body.textContent;

        expect(content).toContain("Paleolithic");
        expect(content).toContain("Mesolithic");
        expect(content).toContain("Neolithic");
    });

    it("contains important archaeological sites", () => {
        const content = document.body.textContent;

        expect(content).toContain("Attirampakkam");
        expect(content).toContain("Bhimbetka");
        expect(content).toContain("Bagor");
        expect(content).toContain("Burzahom");
        expect(content).toContain("Chirand");
    });

    it("contains the tools section", () => {
        const toolsSection = document.getElementById("tools");

        expect(toolsSection).not.toBeNull();
        expect(toolsSection.textContent).toContain("Handaxes");
        expect(toolsSection.textContent).toContain("Microliths");
    });

    it("renders interactive map markers", () => {
        const markers = document.querySelectorAll(".map-marker");

        expect(markers.length).toBeGreaterThanOrEqual(8);
    });

    it("updates map details when a site is selected", () => {
        const marker = document.querySelector(
            '.map-marker[data-site="burzahom"]'
        );

        expect(marker).not.toBeNull();

        marker.click();

        expect(
            document.getElementById("map-site-name").textContent
        ).toBe("Burzahom");

        expect(
            document.getElementById("map-site-location").textContent
        ).toBe("Kashmir");
    });

    it("contains a prehistoric timeline", () => {
        const timeline = document.getElementById("timeline");

        expect(timeline).not.toBeNull();

        expect(
            timeline.querySelectorAll(".timeline-item").length
        ).toBeGreaterThanOrEqual(5);
    });
});

import { describe, it, expect, beforeEach } from "vitest";
import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";

describe("Narmada Valley Fossil Explorer", () => {
    let dom;
    let document;
    let window;

    beforeEach(() => {
        const htmlPath = path.resolve(
            __dirname,
            "../../frontend/narmada-valley-fossils/index.html"
        );

        const jsPath = path.resolve(
            __dirname,
            "../../frontend/narmada-valley-fossils/script.js"
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

    it("renders the Narmada Valley page information", () => {
        expect(document.title).toContain("Narmada Valley");

        const heading = document.querySelector("h1");
        expect(heading.textContent).toContain("Narmada Valley");
    });

    it("contains all required content sections", () => {
        expect(document.getElementById("geography")).not.toBeNull();
        expect(document.getElementById("discoveries")).not.toBeNull();
        expect(document.getElementById("geology")).not.toBeNull();
        expect(document.getElementById("animals")).not.toBeNull();
        expect(document.getElementById("significance")).not.toBeNull();
        expect(document.getElementById("map")).not.toBeNull();
    });

    it("contains important prehistoric discoveries", () => {
        const content = document.body.textContent;

        expect(content).toContain("Hathnora");
        expect(content).toContain("Rajasaurus");
        expect(content).toContain("Titanosaur");
    });

    it("supports interactive map locality selection", () => {
        const buttons = document.querySelectorAll(".map-btn");

        expect(buttons.length).toBe(3);

        const jabalpur = document.querySelector(
            '.map-btn[data-place="jabalpur"]'
        );

        jabalpur.click();

        expect(jabalpur.classList.contains("is-active")).toBe(true);
        expect(document.getElementById("map-info-title").textContent)
            .toContain("Jabalpur");
    });

    it("supports theme switching", () => {
        const button = document.getElementById("theme-toggle");

        button.click();

        expect(document.body.classList.contains("light-theme")).toBe(true);

        button.click();

        expect(document.body.classList.contains("light-theme")).toBe(false);
    });
});


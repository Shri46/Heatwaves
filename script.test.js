/**
 * @jest-environment jsdom
 */

const { showAlert } = require("./script");

describe("Heatwave Website Unit Tests", () => {

   test("showAlert displays the correct alert message", () => {
    window.alert = jest.fn();

    const { showAlert } = require("./script.js");

    showAlert();

    expect(window.alert).toHaveBeenCalledWith(
        "Stay indoors we dont want you going out and increasing the temperature, Hottie ;)"
    );
});

    test("mobile navigation opens when toggle is clicked", () => {
        document.body.innerHTML = `
            <button id="nav-toggle" aria-expanded="false"></button>
            <nav id="site-nav"></nav>
            <span id="year"></span>
        `;

        document.dispatchEvent(new Event("DOMContentLoaded"));

        const toggle = document.getElementById("nav-toggle");
        const nav = document.getElementById("site-nav");

        toggle.click();

        expect(nav.classList.contains("open")).toBe(true);
        expect(toggle.getAttribute("aria-expanded")).toBe("true");
    });

    test("year element is populated", () => {
        document.body.innerHTML = `
            <span id="year"></span>
        `;

        document.dispatchEvent(new Event("DOMContentLoaded"));

        const year = document.getElementById("year");

        expect(year.textContent).toBe(
            new Date().getFullYear().toString()
        );
    });

});
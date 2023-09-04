const {
  fetchData,
  clearChildren,
  createElement,
  copyTemplate,
} = require("./script");

describe("fetchData", () => {
  test("fetches data from a JSON file", async () => {
    const data = await fetchData("/data/test.json");
    expect(data).toEqual({ foo: "bar" });
  });

  test("throws an error if the response is not ok", async () => {
    expect.assertions(1);
    try {
      await fetchData("/data/404.json");
    } catch (error) {
      expect(error.message).toMatch(/Failed to fetch data/);
    }
  });

  test("throws an error if the fetch operation fails", async () => {
    expect.assertions(1);
    try {
      await fetchData("/data/invalid.json");
    } catch (error) {
      expect(error.message).toMatch(/Failed to fetch data/);
    }
  });
});

describe("clearChildren", () => {
  test("removes all child nodes of an element", () => {
    const parent = document.createElement("div");
    const child1 = document.createElement("span");
    const child2 = document.createElement("span");
    parent.appendChild(child1);
    parent.appendChild(child2);
    expect(parent.childNodes.length).toBe(2);
    clearChildren(parent);
    expect(parent.childNodes.length).toBe(0);
  });
});

describe("createElement", () => {
  test("creates an element with text content", () => {
    const element = createElement("div", "Hello, world!", "my-class");
    expect(element.tagName).toBe("DIV");
    expect(element.textContent).toBe("Hello, world!");
    expect(element.className).toBe("my-class");
  });
});

describe("copyTemplate", () => {
  test("copies the template content to the clipboard", async () => {
    const content = "Hello, world!";
    const writeTextMock = jest.spyOn(navigator.clipboard, "writeText");
    writeTextMock.mockResolvedValueOnce();
    await copyTemplate(content);
    expect(writeTextMock).toHaveBeenCalledWith(content);
    expect(window.alert).toHaveBeenCalledWith("Template copied to clipboard!");
    writeTextMock.mockRestore();
  });

  test("handles errors that occur during the copy operation", async () => {
    const content = "Hello, world!";
    const writeTextMock = jest.spyOn(navigator.clipboard, "writeText");
    writeTextMock.mockRejectedValueOnce(new Error("Failed to copy"));
    console.error = jest.fn();
    await copyTemplate(content);
    expect(writeTextMock).toHaveBeenCalledWith(content);
    expect(console.error).toHaveBeenCalledWith(
      "Failed to copy template:",
      expect.any(Error)
    );
    writeTextMock.mockRestore();
  });
});

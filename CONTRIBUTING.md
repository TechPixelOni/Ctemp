# Contributing

### **Table of Contents**

- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Standards and Guidelines](#standards-and-guidelines)
  - [Theme Guidelines](#theme-guidelines)
  - [Language Guidelines](#language-guidelines)
  - [Template Guidelines](#template-guidelines)
- [Questions](#questions)

## Getting Started

When contributing to Ctemp, it's good to know our best practices, tips, and tricks. First, Ctemp is written in JavaScript, CSS, and HTML (in order of language usage within the project); thus, we assume you are comfortable in these languages or have basic knowledge of them. There currently will be no backend development on this project. Furthermore, we use Prettier to format our code.

## How to Contribute

We have two separate contribution guides based on what you're looking to contribute. If you're simply looking to help us augment our language or templates data, please refer to [CONTRIBUTING_BASIC.md](./CONTRIBUTING_BASIC.md). This guide will go over how to do so easily, and without the need to set up a local server.

If you're looking to make deeper code changes that affect functionality, or will require screenshots of the changes, please refer to CONTRIBUTING_ADVANCED.md.

## Standards and Guidelines

Below are a set of general guidelines for different types of changes.

### Pull Request Naming Guidelines

---

---

### Theme Guidelines

Before submitting a theme make sure...

- your theme is unique and isn't visually similar to any we already have.
- the text color is either black or white (or very close to these colors)
- your theme has been added to the `_list` file and the `textColor` property is the theme's main color
- your theme is clear and readable with both `flip test colors` and `colorful mode` enabled and disabled

(If you want to contribute themes but don't know how, check [THEMES.md](./THEMES.md))

### Language Guidelines

- Do not include swear words
- Ensure that your contribution meets JSON standards (no trailing comma at the end of a list)
- Be sure to add your language to the `_list` and `_groups` files
- Make sure the number of words in the file corresponds to the file name (for example: `languageName.json` is 200 words, `languageName_1k.json` is 1000 words, and so on)

(If you want to contribute languages but don't know how, check [LANGUAGES.md](./LANGUAGES.md))

### Quote Guidelines

- Do not include content that contains any libelous or otherwise unlawful, abusive or obscene text.
- Ensure that your contribution meets JSON standards (no trailing comma at the end of a list)
- Verify templates added aren't duplicates of any already present
- Verify the `length` property is correct (length of the text in characters)
- Verify the `id` property is incremented correctly
- Please do not add extremely short templates (less than 60 characters)
- Please do not add extremely Long templates (More than 600 words)

(If you want to contribute quotes but don't know how, check [QUOTES.md](./QUOTES.md))

## Questions

If you have any questions, comments, concerns, or problems let me know on [GitHub](https://github.com/TechPixelOni) or maybe [Discord](#)

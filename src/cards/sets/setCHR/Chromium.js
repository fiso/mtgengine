"use strict";
const Constants = require ("../../../Constants");
const ChromiumBase = require("../setME3/Chromium");

class Chromium extends ChromiumBase {
  constructor (game) {
    super(game, "Chromium", "Chronicles", "CHR");
  }
}

module.exports = Chromium;

"use strict";
const Constants = require ("../../../Constants");
const ChromiumBase = require("../setCHR/Chromium");

class Chromium extends ChromiumBase {
  constructor (game) {
    super(game, "Chromium", "Masters Edition III", "ME3");
  }
}

module.exports = Chromium;

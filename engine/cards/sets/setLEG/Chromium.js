"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ChromiumBase = require("../setCHR/Chromium.js");

class Chromium extends ChromiumBase {
  constructor(game) {
    super(game, "Chromium", "Legends", "LEG");
  }
}

module.exports = Chromium;

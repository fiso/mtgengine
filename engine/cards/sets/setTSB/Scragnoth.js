"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ScragnothBase = require("../setpFNM/Scragnoth.js");

class Scragnoth extends ScragnothBase {
  constructor(game) {
    super(game, "Scragnoth", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = Scragnoth;

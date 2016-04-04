"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PandemoniumBase = require("../setEXO/Pandemonium.js");

class Pandemonium extends PandemoniumBase {
  constructor(game) {
    super(game, "Pandemonium", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = Pandemonium;

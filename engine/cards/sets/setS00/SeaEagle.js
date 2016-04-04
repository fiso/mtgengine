"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SeaEagleBase = require("../set8ED/SeaEagle.js");

class SeaEagle extends SeaEagleBase {
  constructor(game) {
    super(game, "Sea Eagle", "Starter 2000", "S00");
  }
}

module.exports = SeaEagle;

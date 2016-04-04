"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SlaughterCryBase = require("../setM12/SlaughterCry.js");

class SlaughterCry extends SlaughterCryBase {
  constructor(game) {
    super(game, "Slaughter Cry", "Zendikar", "ZEN");
  }
}

module.exports = SlaughterCry;

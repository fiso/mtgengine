"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CircleofProtection:WhiteBase = require("../set6ED/CircleofProtection:White.js");

class CircleofProtection:White extends CircleofProtection:WhiteBase {
  constructor(game) {
    super(game, "Circle of Protection: White", "Tempest", "TMP");
  }
}

module.exports = CircleofProtection:White;

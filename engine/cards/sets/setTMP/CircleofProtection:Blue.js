"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CircleofProtection:BlueBase = require("../set6ED/CircleofProtection:Blue.js");

class CircleofProtection:Blue extends CircleofProtection:BlueBase {
  constructor(game) {
    super(game, "Circle of Protection: Blue", "Tempest", "TMP");
  }
}

module.exports = CircleofProtection:Blue;

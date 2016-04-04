"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GraniteGripBase = require("../set7ED/GraniteGrip.js");

class GraniteGrip extends GraniteGripBase {
  constructor(game) {
    super(game, "Granite Grip", "Urza's Legacy", "ULG");
  }
}

module.exports = GraniteGrip;

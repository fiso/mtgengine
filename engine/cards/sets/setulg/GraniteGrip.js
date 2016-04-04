"use strict";
const Constants = require ("../../../Constants");
const GraniteGripBase = require("../set7ED/GraniteGrip");

class GraniteGrip extends GraniteGripBase {
  constructor(game) {
    super(game, "Granite Grip", "Urza's Legacy", "ULG");
  }
}

module.exports = GraniteGrip;

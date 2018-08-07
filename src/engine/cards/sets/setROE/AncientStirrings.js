"use strict";
const Constants = require ("../../../Constants");
const AncientStirringsBase = require("../setA25/AncientStirrings");

class AncientStirrings extends AncientStirringsBase {
  constructor (game) {
    super(game, "Ancient Stirrings", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = AncientStirrings;

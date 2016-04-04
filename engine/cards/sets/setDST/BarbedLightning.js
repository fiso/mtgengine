"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BarbedLightning extends UnimplementedCard {
  constructor(game) {
    super(game, "Barbed Lightning", "Darksteel", "DST");
  }
}

module.exports = BarbedLightning;

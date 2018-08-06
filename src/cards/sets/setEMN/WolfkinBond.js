"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WolfkinBond extends UnimplementedCard {
  constructor (game) {
    super(game, "Wolfkin Bond", "Eldritch Moon", "EMN");
  }
}

module.exports = WolfkinBond;

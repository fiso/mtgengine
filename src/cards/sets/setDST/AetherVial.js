"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AetherVial extends UnimplementedCard {
  constructor (game) {
    super(game, "Æther Vial", "Darksteel", "DST");
  }
}

module.exports = AetherVial;

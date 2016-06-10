"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AetherSnap extends UnimplementedCard {
  constructor (game) {
    super(game, "Æther Snap", "Commander 2014", "C14");
  }
}

module.exports = AetherSnap;

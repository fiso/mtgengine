"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlindSeer extends UnimplementedCard {
  constructor (game) {
    super(game, "Blind Seer", "Invasion", "INV");
  }
}

module.exports = BlindSeer;

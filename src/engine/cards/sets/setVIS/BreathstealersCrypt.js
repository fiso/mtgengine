"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BreathstealersCrypt extends UnimplementedCard {
  constructor (game) {
    super(game, "Breathstealer's Crypt", "Visions", "VIS");
  }
}

module.exports = BreathstealersCrypt;

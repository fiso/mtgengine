"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DefiantBloodlord extends UnimplementedCard {
  constructor (game) {
    super(game, "Defiant Bloodlord", "Battle for Zendikar", "BFZ");
  }
}

module.exports = DefiantBloodlord;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArrogantBloodlord extends UnimplementedCard {
  constructor (game) {
    super(game, "Arrogant Bloodlord", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = ArrogantBloodlord;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Bloodletter extends UnimplementedCard {
  constructor (game) {
    super(game, "Bloodletter", "Unhinged", "UNH");
  }
}

module.exports = Bloodletter;

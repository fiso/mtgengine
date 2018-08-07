"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LookatMeImRD extends UnimplementedCard {
  constructor (game) {
    super(game, "Look at Me, I'm R&D", "Unhinged", "UNH");
  }
}

module.exports = LookatMeImRD;

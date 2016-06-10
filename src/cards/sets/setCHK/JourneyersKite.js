"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JourneyersKite extends UnimplementedCard {
  constructor (game) {
    super(game, "Journeyer's Kite", "Champions of Kamigawa", "CHK");
  }
}

module.exports = JourneyersKite;

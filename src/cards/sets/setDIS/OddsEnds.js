"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OddsEnds extends UnimplementedCard {
  constructor (game) {
    super(game, "Odds // Ends", "Dissension", "DIS");
  }
}

module.exports = OddsEnds;

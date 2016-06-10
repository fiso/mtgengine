"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PegasusStampede extends UnimplementedCard {
  constructor (game) {
    super(game, "Pegasus Stampede", "Anthologies", "ATH");
  }
}

module.exports = PegasusStampede;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BragoKingEternal extends UnimplementedCard {
  constructor (game) {
    super(game, "Brago, King Eternal", "Eternal Masters", "EMA");
  }
}

module.exports = BragoKingEternal;

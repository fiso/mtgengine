"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MartyrofDusk extends UnimplementedCard {
  constructor (game) {
    super(game, "Martyr of Dusk", "Rivals of Ixalan", "RIX");
  }
}

module.exports = MartyrofDusk;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BronzeHorse extends UnimplementedCard {
  constructor (game) {
    super(game, "Bronze Horse", "Masters Edition IV", "ME4");
  }
}

module.exports = BronzeHorse;

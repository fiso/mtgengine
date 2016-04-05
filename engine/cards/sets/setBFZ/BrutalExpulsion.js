"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrutalExpulsion extends UnimplementedCard {
  constructor(game) {
    super(game, "Brutal Expulsion", "Battle for Zendikar", "BFZ");
  }
}

module.exports = BrutalExpulsion;

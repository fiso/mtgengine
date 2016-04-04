"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManaBreach extends UnimplementedCard {
  constructor(game) {
    super(game, "Mana Breach", "Exodus", "EXO");
  }
}

module.exports = ManaBreach;

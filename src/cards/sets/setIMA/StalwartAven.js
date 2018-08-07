"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StalwartAven extends UnimplementedCard {
  constructor (game) {
    super(game, "Stalwart Aven", "Iconic Masters", "IMA");
  }
}

module.exports = StalwartAven;

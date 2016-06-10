"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Benthicore extends UnimplementedCard {
  constructor (game) {
    super(game, "Benthicore", "Lorwyn", "LRW");
  }
}

module.exports = Benthicore;

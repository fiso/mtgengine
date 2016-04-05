"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MilitiasPride extends UnimplementedCard {
  constructor(game) {
    super(game, "Militia's Pride", "Lorwyn", "LRW");
  }
}

module.exports = MilitiasPride;

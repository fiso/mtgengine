"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StormfrontPegasus extends UnimplementedCard {
  constructor (game) {
    super(game, "Stormfront Pegasus", "Magic 2010", "M10");
  }
}

module.exports = StormfrontPegasus;

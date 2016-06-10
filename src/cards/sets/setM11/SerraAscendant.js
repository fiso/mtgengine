"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SerraAscendant extends UnimplementedCard {
  constructor (game) {
    super(game, "Serra Ascendant", "Magic 2011", "M11");
  }
}

module.exports = SerraAscendant;

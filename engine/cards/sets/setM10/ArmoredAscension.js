"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArmoredAscension extends UnimplementedCard {
  constructor(game) {
    super(game, "Armored Ascension", "Magic 2010", "M10");
  }
}

module.exports = ArmoredAscension;

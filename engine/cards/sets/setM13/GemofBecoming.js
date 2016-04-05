"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GemofBecoming extends UnimplementedCard {
  constructor(game) {
    super(game, "Gem of Becoming", "Magic 2013", "M13");
  }
}

module.exports = GemofBecoming;

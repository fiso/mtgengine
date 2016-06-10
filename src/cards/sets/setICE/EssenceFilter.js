"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EssenceFilter extends UnimplementedCard {
  constructor (game) {
    super(game, "Essence Filter", "Ice Age", "ICE");
  }
}

module.exports = EssenceFilter;

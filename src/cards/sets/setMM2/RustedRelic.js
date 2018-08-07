"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RustedRelic extends UnimplementedCard {
  constructor (game) {
    super(game, "Rusted Relic", "Modern Masters 2015", "MM2");
  }
}

module.exports = RustedRelic;

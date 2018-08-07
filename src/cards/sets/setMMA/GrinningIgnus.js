"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrinningIgnus extends UnimplementedCard {
  constructor (game) {
    super(game, "Grinning Ignus", "Modern Masters", "MMA");
  }
}

module.exports = GrinningIgnus;

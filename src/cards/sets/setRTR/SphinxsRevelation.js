"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SphinxsRevelation extends UnimplementedCard {
  constructor (game) {
    super(game, "Sphinx's Revelation", "Return to Ravnica", "RTR");
  }
}

module.exports = SphinxsRevelation;

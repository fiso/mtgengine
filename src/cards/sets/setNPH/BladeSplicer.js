"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BladeSplicer extends UnimplementedCard {
  constructor (game) {
    super(game, "Blade Splicer", "New Phyrexia", "NPH");
  }
}

module.exports = BladeSplicer;

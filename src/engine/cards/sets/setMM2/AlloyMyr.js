"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AlloyMyr extends UnimplementedCard {
  constructor (game) {
    super(game, "Alloy Myr", "Modern Masters 2015", "MM2");
  }
}

module.exports = AlloyMyr;

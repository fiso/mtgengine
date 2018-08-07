"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LackeyRecycler extends UnimplementedCard {
  constructor (game) {
    super(game, "Lackey Recycler", "Unstable", "UST");
  }
}

module.exports = LackeyRecycler;

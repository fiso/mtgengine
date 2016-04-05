"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ObsianusGolem extends UnimplementedCard {
  constructor(game) {
    super(game, "Obsianus Golem", "Classic Sixth Edition", "6ED");
  }
}

module.exports = ObsianusGolem;

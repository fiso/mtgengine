"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WoodElves extends UnimplementedCard {
  constructor(game) {
    super(game, "Wood Elves", "Commander 2014", "C14");
  }
}

module.exports = WoodElves;

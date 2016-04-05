"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StoneSeederHierophant extends UnimplementedCard {
  constructor(game) {
    super(game, "Stone-Seeder Hierophant", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = StoneSeederHierophant;

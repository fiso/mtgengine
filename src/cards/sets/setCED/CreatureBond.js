"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CreatureBond extends UnimplementedCard {
  constructor (game) {
    super(game, "Creature Bond", "Collector's Edition", "CED");
  }
}

module.exports = CreatureBond;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DwarvenGrunt extends UnimplementedCard {
  constructor (game) {
    super(game, "Dwarven Grunt", "Odyssey", "ODY");
  }
}

module.exports = DwarvenGrunt;

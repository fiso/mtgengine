"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MirranCrusader extends UnimplementedCard {
  constructor (game) {
    super(game, "Mirran Crusader", "Modern Masters 2015", "MM2");
  }
}

module.exports = MirranCrusader;

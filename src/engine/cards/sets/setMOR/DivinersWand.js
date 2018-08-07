"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DivinersWand extends UnimplementedCard {
  constructor (game) {
    super(game, "Diviner's Wand", "Morningtide", "MOR");
  }
}

module.exports = DivinersWand;

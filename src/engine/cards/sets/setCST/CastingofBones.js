"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CastingofBones extends UnimplementedCard {
  constructor (game) {
    super(game, "Casting of Bones", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = CastingofBones;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Necromancy extends UnimplementedCard {
  constructor (game) {
    super(game, "Necromancy", "Visions", "VIS");
  }
}

module.exports = Necromancy;

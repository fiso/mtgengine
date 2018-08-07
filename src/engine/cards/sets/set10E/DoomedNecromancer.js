"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DoomedNecromancer extends UnimplementedCard {
  constructor (game) {
    super(game, "Doomed Necromancer", "Tenth Edition", "10E");
  }
}

module.exports = DoomedNecromancer;

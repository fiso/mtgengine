"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LilianaDefiantNecromancer extends UnimplementedCard {
  constructor (game) {
    super(game, "Liliana, Defiant Necromancer", "Magic Origins", "ORI");
  }
}

module.exports = LilianaDefiantNecromancer;

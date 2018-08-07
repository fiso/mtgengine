"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpellBlast extends UnimplementedCard {
  constructor (game) {
    super(game, "Spell Blast", "Tempest Remastered", "TPR");
  }
}

module.exports = SpellBlast;

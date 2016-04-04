"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpellBlast extends Card {
  constructor(game) {
    super(game, "Spell Blast", "Classic Sixth Edition", "6ED");
  }
}

module.exports = SpellBlast;

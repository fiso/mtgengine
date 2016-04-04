"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CursedTotem extends Card {
  constructor(game) {
    super(game, "Cursed Totem", "Classic Sixth Edition", "6ED");
  }
}

module.exports = CursedTotem;

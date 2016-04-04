"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CursedFlesh extends Card {
  constructor(game) {
    super(game, "Cursed Flesh", "Exodus", "EXO");
  }
}

module.exports = CursedFlesh;

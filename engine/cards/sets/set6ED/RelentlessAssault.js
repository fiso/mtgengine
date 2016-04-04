"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RelentlessAssault extends Card {
  constructor(game) {
    super(game, "Relentless Assault", "Classic Sixth Edition", "6ED");
  }
}

module.exports = RelentlessAssault;

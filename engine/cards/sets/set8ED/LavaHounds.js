"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LavaHounds extends Card {
  constructor(game) {
    super(game, "Lava Hounds", "Eighth Edition", "8ED");
  }
}

module.exports = LavaHounds;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CastintoDarkness extends Card {
  constructor(game) {
    super(game, "Cast into Darkness", "Journey into Nyx", "JOU");
  }
}

module.exports = CastintoDarkness;

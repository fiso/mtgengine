"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Runesword extends Card {
  constructor(game) {
    super(game, "Runesword", "Chronicles", "CHR");
  }
}

module.exports = Runesword;

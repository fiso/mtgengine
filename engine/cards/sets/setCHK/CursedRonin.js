"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CursedRonin extends Card {
  constructor(game) {
    super(game, "Cursed Ronin", "Champions of Kamigawa", "CHK");
  }
}

module.exports = CursedRonin;

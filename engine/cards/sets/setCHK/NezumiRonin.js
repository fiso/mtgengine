"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NezumiRonin extends Card {
  constructor(game) {
    super(game, "Nezumi Ronin", "Champions of Kamigawa", "CHK");
  }
}

module.exports = NezumiRonin;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AngelsTrumpet extends Card {
  constructor(game) {
    super(game, "Angel's Trumpet", "Urza's Legacy", "ULG");
  }
}

module.exports = AngelsTrumpet;

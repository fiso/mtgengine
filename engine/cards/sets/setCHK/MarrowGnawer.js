"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MarrowGnawer extends Card {
  constructor(game) {
    super(game, "Marrow-Gnawer", "Champions of Kamigawa", "CHK");
  }
}

module.exports = MarrowGnawer;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OniPossession extends Card {
  constructor(game) {
    super(game, "Oni Possession", "Champions of Kamigawa", "CHK");
  }
}

module.exports = OniPossession;

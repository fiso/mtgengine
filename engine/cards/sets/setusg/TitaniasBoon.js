"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TitaniasBoon extends Card {
  constructor(game) {
    super(game, "Titania's Boon", "Urza's Saga", "USG");
  }
}

module.exports = TitaniasBoon;

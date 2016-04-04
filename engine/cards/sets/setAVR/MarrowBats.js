"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MarrowBats extends Card {
  constructor(game) {
    super(game, "Marrow Bats", "Avacyn Restored", "AVR");
  }
}

module.exports = MarrowBats;

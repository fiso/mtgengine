"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NaturalEnd extends Card {
  constructor(game) {
    super(game, "Natural End", "Avacyn Restored", "AVR");
  }
}

module.exports = NaturalEnd;

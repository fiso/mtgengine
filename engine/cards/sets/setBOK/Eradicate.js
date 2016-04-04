"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Eradicate extends Card {
  constructor(game) {
    super(game, "Eradicate", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = Eradicate;

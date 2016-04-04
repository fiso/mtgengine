"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Douse extends Card {
  constructor(game) {
    super(game, "Douse", "Urza's Saga", "USG");
  }
}

module.exports = Douse;

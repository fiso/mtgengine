"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Acridian extends Card {
  constructor(game) {
    super(game, "Acridian", "Urza's Saga", "USG");
  }
}

module.exports = Acridian;

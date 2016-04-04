"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Bravado extends Card {
  constructor(game) {
    super(game, "Bravado", "Urza's Saga", "USG");
  }
}

module.exports = Bravado;

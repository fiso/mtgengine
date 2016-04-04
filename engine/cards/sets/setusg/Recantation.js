"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Recantation extends Card {
  constructor(game) {
    super(game, "Recantation", "Urza's Saga", "USG");
  }
}

module.exports = Recantation;

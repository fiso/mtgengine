"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Vebulid extends Card {
  constructor(game) {
    super(game, "Vebulid", "Urza's Saga", "USG");
  }
}

module.exports = Vebulid;

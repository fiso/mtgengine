"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Guma extends Card {
  constructor(game) {
    super(game, "Guma", "Urza's Saga", "USG");
  }
}

module.exports = Guma;

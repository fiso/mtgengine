"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KalastriaHealer extends Card {
  constructor(game) {
    super(game, "Kalastria Healer", "Battle for Zendikar", "BFZ");
  }
}

module.exports = KalastriaHealer;

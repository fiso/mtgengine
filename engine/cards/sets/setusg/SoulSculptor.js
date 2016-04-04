"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoulSculptor extends Card {
  constructor(game) {
    super(game, "Soul Sculptor", "Urza's Saga", "USG");
  }
}

module.exports = SoulSculptor;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Embargo extends Card {
  constructor(game) {
    super(game, "Embargo", "Mercadian Masques", "MMQ");
  }
}

module.exports = Embargo;

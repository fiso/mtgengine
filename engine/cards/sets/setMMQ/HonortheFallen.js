"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HonortheFallen extends Card {
  constructor(game) {
    super(game, "Honor the Fallen", "Mercadian Masques", "MMQ");
  }
}

module.exports = HonortheFallen;

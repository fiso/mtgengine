"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ExtravagantSpirit extends Card {
  constructor(game) {
    super(game, "Extravagant Spirit", "Mercadian Masques", "MMQ");
  }
}

module.exports = ExtravagantSpirit;

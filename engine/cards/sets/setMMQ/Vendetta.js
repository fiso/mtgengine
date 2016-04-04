"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Vendetta extends Card {
  constructor(game) {
    super(game, "Vendetta", "Mercadian Masques", "MMQ");
  }
}

module.exports = Vendetta;

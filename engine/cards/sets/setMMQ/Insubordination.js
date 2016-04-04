"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Insubordination extends Card {
  constructor(game) {
    super(game, "Insubordination", "Mercadian Masques", "MMQ");
  }
}

module.exports = Insubordination;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Tromokratis extends Card {
  constructor(game) {
    super(game, "Tromokratis", "Born of the Gods", "BNG");
  }
}

module.exports = Tromokratis;

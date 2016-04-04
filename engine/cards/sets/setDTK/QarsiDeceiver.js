"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class QarsiDeceiver extends Card {
  constructor(game) {
    super(game, "Qarsi Deceiver", "Dragons of Tarkir", "DTK");
  }
}

module.exports = QarsiDeceiver;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CalderaLake extends Card {
  constructor(game) {
    super(game, "Caldera Lake", "Tempest", "TMP");
  }
}

module.exports = CalderaLake;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FeldonsCane extends Card {
  constructor(game) {
    super(game, "Feldon's Cane", "Antiquities", "ATQ");
  }
}

module.exports = FeldonsCane;

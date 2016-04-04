"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Weakstone extends Card {
  constructor(game) {
    super(game, "Weakstone", "Antiquities", "ATQ");
  }
}

module.exports = Weakstone;

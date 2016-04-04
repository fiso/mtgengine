"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Millstone extends Card {
  constructor(game) {
    super(game, "Millstone", "Antiquities", "ATQ");
  }
}

module.exports = Millstone;

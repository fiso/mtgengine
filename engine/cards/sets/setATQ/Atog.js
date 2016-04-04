"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Atog extends Card {
  constructor(game) {
    super(game, "Atog", "Antiquities", "ATQ");
  }
}

module.exports = Atog;

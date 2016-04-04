"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ClayStatue extends Card {
  constructor(game) {
    super(game, "Clay Statue", "Antiquities", "ATQ");
  }
}

module.exports = ClayStatue;

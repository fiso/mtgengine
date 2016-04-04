"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Rakalite extends Card {
  constructor(game) {
    super(game, "Rakalite", "Antiquities", "ATQ");
  }
}

module.exports = Rakalite;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TheRack extends Card {
  constructor(game) {
    super(game, "The Rack", "Antiquities", "ATQ");
  }
}

module.exports = TheRack;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Powerleech extends Card {
  constructor(game) {
    super(game, "Powerleech", "Antiquities", "ATQ");
  }
}

module.exports = Powerleech;

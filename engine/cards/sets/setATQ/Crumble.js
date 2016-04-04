"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Crumble extends Card {
  constructor(game) {
    super(game, "Crumble", "Antiquities", "ATQ");
  }
}

module.exports = Crumble;

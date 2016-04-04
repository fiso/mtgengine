"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TawnossWeaponry extends Card {
  constructor(game) {
    super(game, "Tawnos's Weaponry", "Antiquities", "ATQ");
  }
}

module.exports = TawnossWeaponry;

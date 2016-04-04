"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TawnossWand extends Card {
  constructor(game) {
    super(game, "Tawnos's Wand", "Antiquities", "ATQ");
  }
}

module.exports = TawnossWand;

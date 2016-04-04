"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WandoftheElements extends Card {
  constructor(game) {
    super(game, "Wand of the Elements", "Darksteel", "DST");
  }
}

module.exports = WandoftheElements;

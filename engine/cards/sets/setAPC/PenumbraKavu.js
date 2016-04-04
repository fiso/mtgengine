"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PenumbraKavu extends Card {
  constructor(game) {
    super(game, "Penumbra Kavu", "Apocalypse", "APC");
  }
}

module.exports = PenumbraKavu;

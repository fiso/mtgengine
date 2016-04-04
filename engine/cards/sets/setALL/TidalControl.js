"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TidalControl extends Card {
  constructor(game) {
    super(game, "Tidal Control", "Alliances", "ALL");
  }
}

module.exports = TidalControl;

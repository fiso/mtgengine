"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DreamTides extends Card {
  constructor(game) {
    super(game, "Dream Tides", "Visions", "VIS");
  }
}

module.exports = DreamTides;

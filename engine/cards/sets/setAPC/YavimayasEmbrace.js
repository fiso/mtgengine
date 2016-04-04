"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class YavimayasEmbrace extends Card {
  constructor(game) {
    super(game, "Yavimaya's Embrace", "Apocalypse", "APC");
  }
}

module.exports = YavimayasEmbrace;

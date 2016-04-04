"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class YavimayaAnts extends Card {
  constructor(game) {
    super(game, "Yavimaya Ants", "Alliances", "ALL");
  }
}

module.exports = YavimayaAnts;

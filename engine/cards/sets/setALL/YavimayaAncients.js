"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class YavimayaAncients extends Card {
  constructor(game) {
    super(game, "Yavimaya Ancients", "Alliances", "ALL");
  }
}

module.exports = YavimayaAncients;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class YavimayaKavu extends Card {
  constructor(game) {
    super(game, "Yavimaya Kavu", "Invasion", "INV");
  }
}

module.exports = YavimayaKavu;

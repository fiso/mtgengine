"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class YavimayaHollow extends Card {
  constructor(game) {
    super(game, "Yavimaya Hollow", "Urza's Destiny", "UDS");
  }
}

module.exports = YavimayaHollow;

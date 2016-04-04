"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class YavimayaBarbarian extends Card {
  constructor(game) {
    super(game, "Yavimaya Barbarian", "Invasion", "INV");
  }
}

module.exports = YavimayaBarbarian;

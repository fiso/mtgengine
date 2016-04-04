"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class YavimayaGnats extends Card {
  constructor(game) {
    super(game, "Yavimaya Gnats", "Ice Age", "ICE");
  }
}

module.exports = YavimayaGnats;

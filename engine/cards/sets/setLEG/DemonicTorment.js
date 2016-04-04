"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DemonicTorment extends Card {
  constructor(game) {
    super(game, "Demonic Torment", "Legends", "LEG");
  }
}

module.exports = DemonicTorment;

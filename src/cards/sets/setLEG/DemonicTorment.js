"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DemonicTorment extends UnimplementedCard {
  constructor (game) {
    super(game, "Demonic Torment", "Legends", "LEG");
  }
}

module.exports = DemonicTorment;

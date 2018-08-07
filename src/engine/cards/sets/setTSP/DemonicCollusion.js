"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DemonicCollusion extends UnimplementedCard {
  constructor (game) {
    super(game, "Demonic Collusion", "Time Spiral", "TSP");
  }
}

module.exports = DemonicCollusion;

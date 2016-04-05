"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrapfindersTrick extends UnimplementedCard {
  constructor(game) {
    super(game, "Trapfinder's Trick", "Zendikar", "ZEN");
  }
}

module.exports = TrapfindersTrick;

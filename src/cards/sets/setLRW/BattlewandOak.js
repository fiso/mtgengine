"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BattlewandOak extends UnimplementedCard {
  constructor (game) {
    super(game, "Battlewand Oak", "Lorwyn", "LRW");
  }
}

module.exports = BattlewandOak;

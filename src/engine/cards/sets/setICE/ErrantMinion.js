"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ErrantMinion extends UnimplementedCard {
  constructor (game) {
    super(game, "Errant Minion", "Ice Age", "ICE");
  }
}

module.exports = ErrantMinion;

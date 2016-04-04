"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UndercityInformer extends Card {
  constructor(game) {
    super(game, "Undercity Informer", "Gatecrash", "GTC");
  }
}

module.exports = UndercityInformer;

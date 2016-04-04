"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MercenaryInformer extends Card {
  constructor(game) {
    super(game, "Mercenary Informer", "Prophecy", "PCY");
  }
}

module.exports = MercenaryInformer;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MercenaryInformer extends UnimplementedCard {
  constructor (game) {
    super(game, "Mercenary Informer", "Prophecy", "PCY");
  }
}

module.exports = MercenaryInformer;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RebelInformer extends UnimplementedCard {
  constructor(game) {
    super(game, "Rebel Informer", "Prophecy", "PCY");
  }
}

module.exports = RebelInformer;

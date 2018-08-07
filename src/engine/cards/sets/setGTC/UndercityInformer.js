"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UndercityInformer extends UnimplementedCard {
  constructor (game) {
    super(game, "Undercity Informer", "Gatecrash", "GTC");
  }
}

module.exports = UndercityInformer;

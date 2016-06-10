"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SilkenfistOrder extends UnimplementedCard {
  constructor (game) {
    super(game, "Silkenfist Order", "Nemesis", "NMS");
  }
}

module.exports = SilkenfistOrder;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnthrallingVictor extends UnimplementedCard {
  constructor (game) {
    super(game, "Enthralling Victor", "Battlebond", "BBD");
  }
}

module.exports = EnthrallingVictor;

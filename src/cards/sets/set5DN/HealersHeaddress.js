"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HealersHeaddress extends UnimplementedCard {
  constructor (game) {
    super(game, "Healer's Headdress", "Fifth Dawn", "5DN");
  }
}

module.exports = HealersHeaddress;

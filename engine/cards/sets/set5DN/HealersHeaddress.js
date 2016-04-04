"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HealersHeaddress extends Card {
  constructor(game) {
    super(game, "Healer's Headdress", "Fifth Dawn", "5DN");
  }
}

module.exports = HealersHeaddress;

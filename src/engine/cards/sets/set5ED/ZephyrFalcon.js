"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZephyrFalcon extends UnimplementedCard {
  constructor (game) {
    super(game, "Zephyr Falcon", "Fifth Edition", "5ED");
  }
}

module.exports = ZephyrFalcon;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianMonitor extends UnimplementedCard {
  constructor (game) {
    super(game, "Phyrexian Monitor", "Urza's Destiny", "UDS");
  }
}

module.exports = PhyrexianMonitor;

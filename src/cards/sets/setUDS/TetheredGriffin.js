"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TetheredGriffin extends UnimplementedCard {
  constructor (game) {
    super(game, "Tethered Griffin", "Urza's Destiny", "UDS");
  }
}

module.exports = TetheredGriffin;

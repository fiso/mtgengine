"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HostageTaker extends UnimplementedCard {
  constructor (game) {
    super(game, "Hostage Taker", "Ixalan", "XLN");
  }
}

module.exports = HostageTaker;

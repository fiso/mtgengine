"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeiroftheWilds extends UnimplementedCard {
  constructor (game) {
    super(game, "Heir of the Wilds", "Khans of Tarkir", "KTK");
  }
}

module.exports = HeiroftheWilds;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TreacherousPitDweller extends UnimplementedCard {
  constructor (game) {
    super(game, "Treacherous Pit-Dweller", "Avacyn Restored", "AVR");
  }
}

module.exports = TreacherousPitDweller;

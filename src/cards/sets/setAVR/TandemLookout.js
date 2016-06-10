"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TandemLookout extends UnimplementedCard {
  constructor (game) {
    super(game, "Tandem Lookout", "Avacyn Restored", "AVR");
  }
}

module.exports = TandemLookout;

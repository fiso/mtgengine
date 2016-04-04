"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelsTomb extends UnimplementedCard {
  constructor(game) {
    super(game, "Angel's Tomb", "Avacyn Restored", "AVR");
  }
}

module.exports = AngelsTomb;

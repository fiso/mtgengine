"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YewSpirit extends UnimplementedCard {
  constructor (game) {
    super(game, "Yew Spirit", "Avacyn Restored", "AVR");
  }
}

module.exports = YewSpirit;

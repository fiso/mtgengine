"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MistRaven extends UnimplementedCard {
  constructor(game) {
    super(game, "Mist Raven", "Avacyn Restored", "AVR");
  }
}

module.exports = MistRaven;

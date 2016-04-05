"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SomberwaldSage extends UnimplementedCard {
  constructor(game) {
    super(game, "Somberwald Sage", "Avacyn Restored", "AVR");
  }
}

module.exports = SomberwaldSage;

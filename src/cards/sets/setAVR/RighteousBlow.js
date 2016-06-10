"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RighteousBlow extends UnimplementedCard {
  constructor (game) {
    super(game, "Righteous Blow", "Avacyn Restored", "AVR");
  }
}

module.exports = RighteousBlow;

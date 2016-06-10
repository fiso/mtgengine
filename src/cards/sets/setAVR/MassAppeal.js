"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MassAppeal extends UnimplementedCard {
  constructor (game) {
    super(game, "Mass Appeal", "Avacyn Restored", "AVR");
  }
}

module.exports = MassAppeal;

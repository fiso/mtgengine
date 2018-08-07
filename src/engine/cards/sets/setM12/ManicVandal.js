"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManicVandal extends UnimplementedCard {
  constructor (game) {
    super(game, "Manic Vandal", "Magic 2012", "M12");
  }
}

module.exports = ManicVandal;

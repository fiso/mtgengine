"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IntotheWilds extends UnimplementedCard {
  constructor (game) {
    super(game, "Into the Wilds", "Magic 2014", "M14");
  }
}

module.exports = IntotheWilds;

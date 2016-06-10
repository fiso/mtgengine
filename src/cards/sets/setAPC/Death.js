"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Death extends UnimplementedCard {
  constructor (game) {
    super(game, "Death", "Apocalypse", "APC");
  }
}

module.exports = Death;

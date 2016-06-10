"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StaunchDefenders extends UnimplementedCard {
  constructor (game) {
    super(game, "Staunch Defenders", "Classic Sixth Edition", "6ED");
  }
}

module.exports = StaunchDefenders;

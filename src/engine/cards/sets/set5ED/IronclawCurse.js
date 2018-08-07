"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IronclawCurse extends UnimplementedCard {
  constructor (game) {
    super(game, "Ironclaw Curse", "Fifth Edition", "5ED");
  }
}

module.exports = IronclawCurse;

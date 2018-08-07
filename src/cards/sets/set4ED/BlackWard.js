"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlackWard extends UnimplementedCard {
  constructor (game) {
    super(game, "Black Ward", "Fourth Edition", "4ED");
  }
}

module.exports = BlackWard;

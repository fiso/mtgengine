"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RedWard extends UnimplementedCard {
  constructor (game) {
    super(game, "Red Ward", "Fourth Edition", "4ED");
  }
}

module.exports = RedWard;

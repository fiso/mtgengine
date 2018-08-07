"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Backfire extends UnimplementedCard {
  constructor (game) {
    super(game, "Backfire", "Fourth Edition", "4ED");
  }
}

module.exports = Backfire;

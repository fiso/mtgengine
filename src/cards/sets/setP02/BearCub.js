"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BearCub extends UnimplementedCard {
  constructor (game) {
    super(game, "Bear Cub", "Portal Second Age", "P02");
  }
}

module.exports = BearCub;

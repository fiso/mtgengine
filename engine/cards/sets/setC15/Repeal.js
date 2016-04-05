"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Repeal extends UnimplementedCard {
  constructor(game) {
    super(game, "Repeal", "Commander 2015", "C15");
  }
}

module.exports = Repeal;

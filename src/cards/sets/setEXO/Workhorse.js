"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Workhorse extends UnimplementedCard {
  constructor(game) {
    super(game, "Workhorse", "Exodus", "EXO");
  }
}

module.exports = Workhorse;

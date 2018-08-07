"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Kudzu extends UnimplementedCard {
  constructor (game) {
    super(game, "Kudzu", "Masters Edition IV", "ME4");
  }
}

module.exports = Kudzu;

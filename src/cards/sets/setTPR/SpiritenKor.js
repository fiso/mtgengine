"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpiritenKor extends UnimplementedCard {
  constructor (game) {
    super(game, "Spirit en-Kor", "Tempest Remastered", "TPR");
  }
}

module.exports = SpiritenKor;

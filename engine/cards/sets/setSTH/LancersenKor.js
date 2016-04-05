"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LancersenKor extends UnimplementedCard {
  constructor(game) {
    super(game, "Lancers en-Kor", "Stronghold", "STH");
  }
}

module.exports = LancersenKor;

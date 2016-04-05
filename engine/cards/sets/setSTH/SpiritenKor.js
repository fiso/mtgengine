"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpiritenKor extends UnimplementedCard {
  constructor(game) {
    super(game, "Spirit en-Kor", "Stronghold", "STH");
  }
}

module.exports = SpiritenKor;

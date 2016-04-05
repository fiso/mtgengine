"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JinxedRing extends UnimplementedCard {
  constructor(game) {
    super(game, "Jinxed Ring", "Stronghold", "STH");
  }
}

module.exports = JinxedRing;

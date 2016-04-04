"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JinxedRing extends Card {
  constructor(game) {
    super(game, "Jinxed Ring", "Stronghold", "STH");
  }
}

module.exports = JinxedRing;

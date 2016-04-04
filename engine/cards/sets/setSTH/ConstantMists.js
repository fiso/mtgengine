"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ConstantMists extends Card {
  constructor(game) {
    super(game, "Constant Mists", "Stronghold", "STH");
  }
}

module.exports = ConstantMists;

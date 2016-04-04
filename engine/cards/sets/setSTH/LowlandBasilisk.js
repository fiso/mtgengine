"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LowlandBasilisk extends Card {
  constructor(game) {
    super(game, "Lowland Basilisk", "Stronghold", "STH");
  }
}

module.exports = LowlandBasilisk;

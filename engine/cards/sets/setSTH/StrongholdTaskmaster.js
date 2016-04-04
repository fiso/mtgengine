"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StrongholdTaskmaster extends Card {
  constructor(game) {
    super(game, "Stronghold Taskmaster", "Stronghold", "STH");
  }
}

module.exports = StrongholdTaskmaster;

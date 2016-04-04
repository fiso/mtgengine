"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoggBombers extends Card {
  constructor(game) {
    super(game, "Mogg Bombers", "Stronghold", "STH");
  }
}

module.exports = MoggBombers;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoggInfestation extends Card {
  constructor(game) {
    super(game, "Mogg Infestation", "Stronghold", "STH");
  }
}

module.exports = MoggInfestation;

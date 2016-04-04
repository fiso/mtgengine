"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoggManiac extends Card {
  constructor(game) {
    super(game, "Mogg Maniac", "Stronghold", "STH");
  }
}

module.exports = MoggManiac;

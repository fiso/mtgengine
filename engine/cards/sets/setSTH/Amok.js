"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Amok extends Card {
  constructor(game) {
    super(game, "Amok", "Stronghold", "STH");
  }
}

module.exports = Amok;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HiddenRetreat extends Card {
  constructor(game) {
    super(game, "Hidden Retreat", "Stronghold", "STH");
  }
}

module.exports = HiddenRetreat;

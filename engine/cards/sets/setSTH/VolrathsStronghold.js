"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VolrathsStronghold extends Card {
  constructor(game) {
    super(game, "Volrath's Stronghold", "Stronghold", "STH");
  }
}

module.exports = VolrathsStronghold;

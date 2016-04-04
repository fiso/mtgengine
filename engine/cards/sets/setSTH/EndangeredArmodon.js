"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EndangeredArmodon extends Card {
  constructor(game) {
    super(game, "Endangered Armodon", "Stronghold", "STH");
  }
}

module.exports = EndangeredArmodon;

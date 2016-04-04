"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoltariChampion extends Card {
  constructor(game) {
    super(game, "Soltari Champion", "Stronghold", "STH");
  }
}

module.exports = SoltariChampion;

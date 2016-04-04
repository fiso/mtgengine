"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UndyingFlames extends Card {
  constructor(game) {
    super(game, "Undying Flames", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = UndyingFlames;

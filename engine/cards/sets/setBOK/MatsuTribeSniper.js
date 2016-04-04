"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MatsuTribeSniper extends Card {
  constructor(game) {
    super(game, "Matsu-Tribe Sniper", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = MatsuTribeSniper;

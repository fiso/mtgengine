"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LeoninBola extends Card {
  constructor(game) {
    super(game, "Leonin Bola", "Darksteel", "DST");
  }
}

module.exports = LeoninBola;

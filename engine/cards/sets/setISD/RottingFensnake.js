"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RottingFensnake extends Card {
  constructor(game) {
    super(game, "Rotting Fensnake", "Innistrad", "ISD");
  }
}

module.exports = RottingFensnake;

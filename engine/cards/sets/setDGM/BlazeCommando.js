"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlazeCommando extends Card {
  constructor(game) {
    super(game, "Blaze Commando", "Dragon's Maze", "DGM");
  }
}

module.exports = BlazeCommando;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PerniciousDeed extends Card {
  constructor(game) {
    super(game, "Pernicious Deed", "Apocalypse", "APC");
  }
}

module.exports = PerniciousDeed;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LongshotSquad extends Card {
  constructor(game) {
    super(game, "Longshot Squad", "Khans of Tarkir", "KTK");
  }
}

module.exports = LongshotSquad;

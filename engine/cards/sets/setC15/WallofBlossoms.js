"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WallofBlossoms extends Card {
  constructor(game) {
    super(game, "Wall of Blossoms", "Commander 2015", "C15");
  }
}

module.exports = WallofBlossoms;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WallofTears extends Card {
  constructor(game) {
    super(game, "Wall of Tears", "Stronghold", "STH");
  }
}

module.exports = WallofTears;

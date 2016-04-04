"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StrongarmThug extends Card {
  constructor(game) {
    super(game, "Strongarm Thug", "Mercadian Masques", "MMQ");
  }
}

module.exports = StrongarmThug;

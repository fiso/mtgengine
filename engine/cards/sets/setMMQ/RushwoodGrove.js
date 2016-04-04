"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RushwoodGrove extends Card {
  constructor(game) {
    super(game, "Rushwood Grove", "Mercadian Masques", "MMQ");
  }
}

module.exports = RushwoodGrove;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Putrefaction extends Card {
  constructor(game) {
    super(game, "Putrefaction", "Mercadian Masques", "MMQ");
  }
}

module.exports = Putrefaction;

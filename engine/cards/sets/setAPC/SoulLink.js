"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoulLink extends Card {
  constructor(game) {
    super(game, "Soul Link", "Apocalypse", "APC");
  }
}

module.exports = SoulLink;

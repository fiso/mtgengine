"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MalevolentWhispers extends Card {
  constructor(game) {
    super(game, "Malevolent Whispers", "Shadows over Innistrad", "SOI");
  }
}

module.exports = MalevolentWhispers;

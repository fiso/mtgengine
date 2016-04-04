"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SuffocatingBlast extends Card {
  constructor(game) {
    super(game, "Suffocating Blast", "Apocalypse", "APC");
  }
}

module.exports = SuffocatingBlast;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhyrexianArena extends Card {
  constructor(game) {
    super(game, "Phyrexian Arena", "Apocalypse", "APC");
  }
}

module.exports = PhyrexianArena;

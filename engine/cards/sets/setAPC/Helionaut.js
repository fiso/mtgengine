"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Helionaut extends Card {
  constructor(game) {
    super(game, "Helionaut", "Apocalypse", "APC");
  }
}

module.exports = Helionaut;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UpdraftElemental extends Card {
  constructor(game) {
    super(game, "Updraft Elemental", "Dragons of Tarkir", "DTK");
  }
}

module.exports = UpdraftElemental;

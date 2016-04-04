"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Fervor extends Card {
  constructor(game) {
    super(game, "Fervor", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Fervor;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LifesFinale extends Card {
  constructor(game) {
    super(game, "Life's Finale", "New Phyrexia", "NPH");
  }
}

module.exports = LifesFinale;

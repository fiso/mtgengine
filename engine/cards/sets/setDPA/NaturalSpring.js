"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NaturalSpring extends Card {
  constructor(game) {
    super(game, "Natural Spring", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = NaturalSpring;

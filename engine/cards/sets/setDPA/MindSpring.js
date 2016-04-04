"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MindSpring extends Card {
  constructor(game) {
    super(game, "Mind Spring", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = MindSpring;

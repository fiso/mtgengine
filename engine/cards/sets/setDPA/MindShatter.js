"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MindShatter extends Card {
  constructor(game) {
    super(game, "Mind Shatter", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = MindShatter;

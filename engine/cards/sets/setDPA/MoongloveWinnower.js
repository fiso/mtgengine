"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoongloveWinnower extends Card {
  constructor(game) {
    super(game, "Moonglove Winnower", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = MoongloveWinnower;

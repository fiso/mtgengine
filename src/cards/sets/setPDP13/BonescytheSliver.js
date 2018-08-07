"use strict";
const Constants = require ("../../../Constants");
const BonescytheSliverBase = require("../setM14/BonescytheSliver");

class BonescytheSliver extends BonescytheSliverBase {
  constructor (game) {
    super(game, "Bonescythe Sliver", "Duels of the Planeswalkers Promos 2013", "PDP13");
  }
}

module.exports = BonescytheSliver;

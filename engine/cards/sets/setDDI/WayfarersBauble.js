"use strict";
const Constants = require ("../../../Constants");
const WayfarersBaubleBase = require("../setC13/WayfarersBauble");

class WayfarersBauble extends WayfarersBaubleBase {
  constructor(game) {
    super(game, "Wayfarer's Bauble", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = WayfarersBauble;

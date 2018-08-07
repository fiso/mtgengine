"use strict";
const Constants = require ("../../../Constants");
const AnuridBrushhopperBase = require("../setWC03/AnuridBrushhopper");

class AnuridBrushhopper extends AnuridBrushhopperBase {
  constructor (game) {
    super(game, "Anurid Brushhopper", "World Championship Decks 2002", "WC02");
  }
}

module.exports = AnuridBrushhopper;

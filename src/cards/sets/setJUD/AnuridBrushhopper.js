"use strict";
const Constants = require ("../../../Constants");
const AnuridBrushhopperBase = require("../setWC03/AnuridBrushhopper");

class AnuridBrushhopper extends AnuridBrushhopperBase {
  constructor (game) {
    super(game, "Anurid Brushhopper", "Judgment", "JUD");
  }
}

module.exports = AnuridBrushhopper;

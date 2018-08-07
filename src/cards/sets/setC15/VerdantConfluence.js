"use strict";
const Constants = require ("../../../Constants");
const VerdantConfluenceBase = require("../setPZ1/VerdantConfluence");

class VerdantConfluence extends VerdantConfluenceBase {
  constructor (game) {
    super(game, "Verdant Confluence", "Commander 2015", "C15");
  }
}

module.exports = VerdantConfluence;

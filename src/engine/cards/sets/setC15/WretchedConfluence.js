"use strict";
const Constants = require ("../../../Constants");
const WretchedConfluenceBase = require("../setCMA/WretchedConfluence");

class WretchedConfluence extends WretchedConfluenceBase {
  constructor (game) {
    super(game, "Wretched Confluence", "Commander 2015", "C15");
  }
}

module.exports = WretchedConfluence;

"use strict";
const Constants = require ("../../../Constants");
const WretchedConfluenceBase = require("../setCMA/WretchedConfluence");

class WretchedConfluence extends WretchedConfluenceBase {
  constructor (game) {
    super(game, "Wretched Confluence", "Legendary Cube", "PZ1");
  }
}

module.exports = WretchedConfluence;

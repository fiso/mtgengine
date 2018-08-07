"use strict";
const Constants = require ("../../../Constants");
const FieryConfluenceBase = require("../setCM2/FieryConfluence");

class FieryConfluence extends FieryConfluenceBase {
  constructor (game) {
    super(game, "Fiery Confluence", "Legendary Cube", "PZ1");
  }
}

module.exports = FieryConfluence;

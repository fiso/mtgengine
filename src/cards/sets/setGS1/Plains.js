"use strict";
const Constants = require ("../../../Constants");
const PlainsBase = require("../setC18/Plains");

class Plains extends PlainsBase {
  constructor (game) {
    super(game, "Plains", "Global Series Jiang Yanggu & Mu Yanling", "GS1");
  }
}

module.exports = Plains;

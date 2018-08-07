"use strict";
const Constants = require ("../../../Constants");
const IslandBase = require("../setC18/Island");

class Island extends IslandBase {
  constructor (game) {
    super(game, "Island", "Global Series Jiang Yanggu & Mu Yanling", "GS1");
  }
}

module.exports = Island;

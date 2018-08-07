"use strict";
const Constants = require ("../../../Constants");
const CastigateBase = require("../setGPT/Castigate");

class Castigate extends CastigateBase {
  constructor (game) {
    super(game, "Castigate", "Magic Online Promos", "PRM");
  }
}

module.exports = Castigate;

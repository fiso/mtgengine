"use strict";
const Constants = require ("../../../Constants");
const ExertInfluenceBase = require("../setBFZ/ExertInfluence");

class ExertInfluence extends ExertInfluenceBase {
  constructor (game) {
    super(game, "Exert Influence", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = ExertInfluence;

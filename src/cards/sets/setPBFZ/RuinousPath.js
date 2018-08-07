"use strict";
const Constants = require ("../../../Constants");
const RuinousPathBase = require("../setC18/RuinousPath");

class RuinousPath extends RuinousPathBase {
  constructor (game) {
    super(game, "Ruinous Path", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = RuinousPath;

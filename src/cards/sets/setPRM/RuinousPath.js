"use strict";
const Constants = require ("../../../Constants");
const RuinousPathBase = require("../setC18/RuinousPath");

class RuinousPath extends RuinousPathBase {
  constructor (game) {
    super(game, "Ruinous Path", "Magic Online Promos", "PRM");
  }
}

module.exports = RuinousPath;

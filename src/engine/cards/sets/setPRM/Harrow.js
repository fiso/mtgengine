"use strict";
const Constants = require ("../../../Constants");
const HarrowBase = require("../setC18/Harrow");

class Harrow extends HarrowBase {
  constructor (game) {
    super(game, "Harrow", "Magic Online Promos", "PRM");
  }
}

module.exports = Harrow;

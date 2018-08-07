"use strict";
const Constants = require ("../../../Constants");
const TidingsBase = require("../setC18/Tidings");

class Tidings extends TidingsBase {
  constructor (game) {
    super(game, "Tidings", "Magic Online Promos", "PRM");
  }
}

module.exports = Tidings;

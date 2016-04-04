"use strict";
const Constants = require ("../../../Constants");
const WildcallBase = require("../setFRF/Wildcall");

class Wildcall extends WildcallBase {
  constructor(game) {
    super(game, "Wildcall", "Ugin's Fate promos", "FRF_UGIN");
  }
}

module.exports = Wildcall;

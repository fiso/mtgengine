"use strict";
const Constants = require ("../../../Constants");
const FledglingMawcorBase = require("../setJVC/FledglingMawcor");

class FledglingMawcor extends FledglingMawcorBase {
  constructor (game) {
    super(game, "Fledgling Mawcor", "Time Spiral", "TSP");
  }
}

module.exports = FledglingMawcor;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FledglingMawcorBase = require("../setDD3_JVC/FledglingMawcor.js");

class FledglingMawcor extends FledglingMawcorBase {
  constructor(game) {
    super(game, "Fledgling Mawcor", "Time Spiral", "TSP");
  }
}

module.exports = FledglingMawcor;

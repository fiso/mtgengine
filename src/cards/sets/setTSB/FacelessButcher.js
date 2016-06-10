"use strict";
const Constants = require ("../../../Constants");
const FacelessButcherBase = require("../setPD3/FacelessButcher");

class FacelessButcher extends FacelessButcherBase {
  constructor (game) {
    super(game, "Faceless Butcher", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = FacelessButcher;

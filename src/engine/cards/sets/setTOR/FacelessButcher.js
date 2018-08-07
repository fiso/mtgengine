"use strict";
const Constants = require ("../../../Constants");
const FacelessButcherBase = require("../setPD3/FacelessButcher");

class FacelessButcher extends FacelessButcherBase {
  constructor (game) {
    super(game, "Faceless Butcher", "Torment", "TOR");
  }
}

module.exports = FacelessButcher;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FacelessButcherBase = require("../setPD3/FacelessButcher.js");

class FacelessButcher extends FacelessButcherBase {
  constructor(game) {
    super(game, "Faceless Butcher", "Torment", "TOR");
  }
}

module.exports = FacelessButcher;

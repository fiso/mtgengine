"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FortifiedAreaBase = require("../set4ED/FortifiedArea.js");

class FortifiedArea extends FortifiedAreaBase {
  constructor(game) {
    super(game, "Fortified Area", "Legends", "LEG");
  }
}

module.exports = FortifiedArea;

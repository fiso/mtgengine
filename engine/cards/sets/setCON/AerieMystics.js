"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AerieMysticsBase = require("../setC13/AerieMystics.js");

class AerieMystics extends AerieMysticsBase {
  constructor(game) {
    super(game, "Aerie Mystics", "Conflux", "CON");
  }
}

module.exports = AerieMystics;

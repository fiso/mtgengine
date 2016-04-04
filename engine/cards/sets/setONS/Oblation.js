"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OblationBase = require("../setC14/Oblation.js");

class Oblation extends OblationBase {
  constructor(game) {
    super(game, "Oblation", "Onslaught", "ONS");
  }
}

module.exports = Oblation;

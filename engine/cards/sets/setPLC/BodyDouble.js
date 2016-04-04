"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BodyDoubleBase = require("../setDDM/BodyDouble.js");

class BodyDouble extends BodyDoubleBase {
  constructor(game) {
    super(game, "Body Double", "Planar Chaos", "PLC");
  }
}

module.exports = BodyDouble;

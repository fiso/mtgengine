"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RathiTrapperBase = require("../setMMA/RathiTrapper.js");

class RathiTrapper extends RathiTrapperBase {
  constructor(game) {
    super(game, "Rathi Trapper", "Planar Chaos", "PLC");
  }
}

module.exports = RathiTrapper;

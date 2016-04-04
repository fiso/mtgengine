"use strict";
const Constants = require ("../../../Constants");
const RathiTrapperBase = require("../setMMA/RathiTrapper");

class RathiTrapper extends RathiTrapperBase {
  constructor(game) {
    super(game, "Rathi Trapper", "Planar Chaos", "PLC");
  }
}

module.exports = RathiTrapper;

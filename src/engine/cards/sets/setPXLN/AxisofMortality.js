"use strict";
const Constants = require ("../../../Constants");
const AxisofMortalityBase = require("../setXLN/AxisofMortality");

class AxisofMortality extends AxisofMortalityBase {
  constructor (game) {
    super(game, "Axis of Mortality", "Ixalan Promos", "PXLN");
  }
}

module.exports = AxisofMortality;

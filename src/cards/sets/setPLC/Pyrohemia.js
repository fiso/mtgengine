"use strict";
const Constants = require ("../../../Constants");
const PyrohemiaBase = require("../setCMD/Pyrohemia");

class Pyrohemia extends PyrohemiaBase {
  constructor (game) {
    super(game, "Pyrohemia", "Planar Chaos", "PLC");
  }
}

module.exports = Pyrohemia;

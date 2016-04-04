"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PyrohemiaBase = require("../setCMD/Pyrohemia.js");

class Pyrohemia extends PyrohemiaBase {
  constructor(game) {
    super(game, "Pyrohemia", "Planar Chaos", "PLC");
  }
}

module.exports = Pyrohemia;

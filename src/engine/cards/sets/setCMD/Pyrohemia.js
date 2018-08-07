"use strict";
const Constants = require ("../../../Constants");
const PyrohemiaBase = require("../setCMA/Pyrohemia");

class Pyrohemia extends PyrohemiaBase {
  constructor (game) {
    super(game, "Pyrohemia", "Commander 2011", "CMD");
  }
}

module.exports = Pyrohemia;

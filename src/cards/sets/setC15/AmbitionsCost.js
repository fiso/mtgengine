"use strict";
const Constants = require ("../../../Constants");
const AmbitionsCostBase = require("../setMTGA/AmbitionsCost");

class AmbitionsCost extends AmbitionsCostBase {
  constructor (game) {
    super(game, "Ambition's Cost", "Commander 2015", "C15");
  }
}

module.exports = AmbitionsCost;

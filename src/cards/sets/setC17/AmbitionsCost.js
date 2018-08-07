"use strict";
const Constants = require ("../../../Constants");
const AmbitionsCostBase = require("../setMTGA/AmbitionsCost");

class AmbitionsCost extends AmbitionsCostBase {
  constructor (game) {
    super(game, "Ambition's Cost", "Commander 2017", "C17");
  }
}

module.exports = AmbitionsCost;

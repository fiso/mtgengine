"use strict";
const Constants = require ("../../../Constants");
const AmbitionsCostBase = require("../setMTGA/AmbitionsCost");

class AmbitionsCost extends AmbitionsCostBase {
  constructor (game) {
    super(game, "Ambition's Cost", "Eighth Edition", "8ED");
  }
}

module.exports = AmbitionsCost;

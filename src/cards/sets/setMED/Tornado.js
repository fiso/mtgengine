"use strict";
const Constants = require ("../../../Constants");
const TornadoBase = require("../setALL/Tornado");

class Tornado extends TornadoBase {
  constructor (game) {
    super(game, "Tornado", "Masters Edition", "MED");
  }
}

module.exports = Tornado;

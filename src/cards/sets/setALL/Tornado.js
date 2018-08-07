"use strict";
const Constants = require ("../../../Constants");
const TornadoBase = require("../setMED/Tornado");

class Tornado extends TornadoBase {
  constructor (game) {
    super(game, "Tornado", "Alliances", "ALL");
  }
}

module.exports = Tornado;

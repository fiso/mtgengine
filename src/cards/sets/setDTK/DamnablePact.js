"use strict";
const Constants = require ("../../../Constants");
const DamnablePactBase = require("../setC17/DamnablePact");

class DamnablePact extends DamnablePactBase {
  constructor (game) {
    super(game, "Damnable Pact", "Dragons of Tarkir", "DTK");
  }
}

module.exports = DamnablePact;

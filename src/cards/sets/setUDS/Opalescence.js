"use strict";
const Constants = require ("../../../Constants");
const OpalescenceBase = require("../setWC00/Opalescence");

class Opalescence extends OpalescenceBase {
  constructor (game) {
    super(game, "Opalescence", "Urza's Destiny", "UDS");
  }
}

module.exports = Opalescence;

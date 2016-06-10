"use strict";
const Constants = require ("../../../Constants");
const GatetoPhyrexiaBase = require("../setATQ/GatetoPhyrexia");

class GatetoPhyrexia extends GatetoPhyrexiaBase {
  constructor (game) {
    super(game, "Gate to Phyrexia", "Masters Edition IV", "ME4");
  }
}

module.exports = GatetoPhyrexia;

"use strict";
const Constants = require ("../../../Constants");
const GatetoPhyrexiaBase = require("../setME4/GatetoPhyrexia");

class GatetoPhyrexia extends GatetoPhyrexiaBase {
  constructor (game) {
    super(game, "Gate to Phyrexia", "Antiquities", "ATQ");
  }
}

module.exports = GatetoPhyrexia;

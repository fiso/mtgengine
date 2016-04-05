"use strict";
const Constants = require ("../../../Constants");
const ExtirpateBase = require("../setMMA/Extirpate");

class Extirpate extends ExtirpateBase {
  constructor(game) {
    super(game, "Extirpate", "Planar Chaos", "PLC");
  }
}

module.exports = Extirpate;

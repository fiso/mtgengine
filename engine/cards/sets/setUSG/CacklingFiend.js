"use strict";
const Constants = require ("../../../Constants");
const CacklingFiendBase = require("../setBRB/CacklingFiend");

class CacklingFiend extends CacklingFiendBase {
  constructor(game) {
    super(game, "Cackling Fiend", "Urza's Saga", "USG");
  }
}

module.exports = CacklingFiend;

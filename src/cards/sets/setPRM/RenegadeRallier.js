"use strict";
const Constants = require ("../../../Constants");
const RenegadeRallierBase = require("../setAER/RenegadeRallier");

class RenegadeRallier extends RenegadeRallierBase {
  constructor (game) {
    super(game, "Renegade Rallier", "Magic Online Promos", "PRM");
  }
}

module.exports = RenegadeRallier;

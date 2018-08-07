"use strict";
const Constants = require ("../../../Constants");
const RenegadeRallierBase = require("../setAER/RenegadeRallier");

class RenegadeRallier extends RenegadeRallierBase {
  constructor (game) {
    super(game, "Renegade Rallier", "Friday Night Magic 2017", "F17");
  }
}

module.exports = RenegadeRallier;

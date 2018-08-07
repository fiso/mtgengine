"use strict";
const Constants = require ("../../../Constants");
const BenalishMarshalBase = require("../setDOM/BenalishMarshal");

class BenalishMarshal extends BenalishMarshalBase {
  constructor (game) {
    super(game, "Benalish Marshal", "Dominaria Promos", "PDOM");
  }
}

module.exports = BenalishMarshal;

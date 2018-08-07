"use strict";
const Constants = require ("../../../Constants");
const RiteofBelzenlokBase = require("../setDOM/RiteofBelzenlok");

class RiteofBelzenlok extends RiteofBelzenlokBase {
  constructor (game) {
    super(game, "Rite of Belzenlok", "Dominaria Promos", "PDOM");
  }
}

module.exports = RiteofBelzenlok;

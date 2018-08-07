"use strict";
const Constants = require ("../../../Constants");
const CacklingCounterpartBase = require("../setMM3/CacklingCounterpart");

class CacklingCounterpart extends CacklingCounterpartBase {
  constructor (game) {
    super(game, "Cackling Counterpart", "Commander 2014", "C14");
  }
}

module.exports = CacklingCounterpart;

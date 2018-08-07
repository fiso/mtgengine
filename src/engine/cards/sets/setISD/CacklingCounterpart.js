"use strict";
const Constants = require ("../../../Constants");
const CacklingCounterpartBase = require("../setMM3/CacklingCounterpart");

class CacklingCounterpart extends CacklingCounterpartBase {
  constructor (game) {
    super(game, "Cackling Counterpart", "Innistrad", "ISD");
  }
}

module.exports = CacklingCounterpart;

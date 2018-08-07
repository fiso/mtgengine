"use strict";
const Constants = require ("../../../Constants");
const MaskedAdmirersBase = require("../setCMA/MaskedAdmirers");

class MaskedAdmirers extends MaskedAdmirersBase {
  constructor (game) {
    super(game, "Masked Admirers", "Lorwyn", "LRW");
  }
}

module.exports = MaskedAdmirers;

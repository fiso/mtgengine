"use strict";
const Constants = require ("../../../Constants");
const MaskedAdmirersBase = require("../setCMA/MaskedAdmirers");

class MaskedAdmirers extends MaskedAdmirersBase {
  constructor (game) {
    super(game, "Masked Admirers", "Commander 2014", "C14");
  }
}

module.exports = MaskedAdmirers;

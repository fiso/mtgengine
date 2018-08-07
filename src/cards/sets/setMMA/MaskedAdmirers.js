"use strict";
const Constants = require ("../../../Constants");
const MaskedAdmirersBase = require("../setCMA/MaskedAdmirers");

class MaskedAdmirers extends MaskedAdmirersBase {
  constructor (game) {
    super(game, "Masked Admirers", "Modern Masters", "MMA");
  }
}

module.exports = MaskedAdmirers;

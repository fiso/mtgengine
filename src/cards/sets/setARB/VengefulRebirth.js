"use strict";
const Constants = require ("../../../Constants");
const VengefulRebirthBase = require("../setMM2/VengefulRebirth");

class VengefulRebirth extends VengefulRebirthBase {
  constructor (game) {
    super(game, "Vengeful Rebirth", "Alara Reborn", "ARB");
  }
}

module.exports = VengefulRebirth;

"use strict";
const Constants = require ("../../../Constants");
const VileRebirthBase = require("../setM14/VileRebirth");

class VileRebirth extends VileRebirthBase {
  constructor (game) {
    super(game, "Vile Rebirth", "Magic 2013", "M13");
  }
}

module.exports = VileRebirth;

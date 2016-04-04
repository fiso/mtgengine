"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VileRebirthBase = require("../setM13/VileRebirth.js");

class VileRebirth extends VileRebirthBase {
  constructor(game) {
    super(game, "Vile Rebirth", "Magic 2014 Core Set", "M14");
  }
}

module.exports = VileRebirth;

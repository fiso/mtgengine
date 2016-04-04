"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StaffoftheWildMagusBase = require("../setM14/StaffoftheWildMagus.js");

class StaffoftheWildMagus extends StaffoftheWildMagusBase {
  constructor(game) {
    super(game, "Staff of the Wild Magus", "Magic 2015 Core Set", "M15");
  }
}

module.exports = StaffoftheWildMagus;

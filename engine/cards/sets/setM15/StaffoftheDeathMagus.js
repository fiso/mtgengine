"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StaffoftheDeathMagusBase = require("../setM14/StaffoftheDeathMagus.js");

class StaffoftheDeathMagus extends StaffoftheDeathMagusBase {
  constructor(game) {
    super(game, "Staff of the Death Magus", "Magic 2015 Core Set", "M15");
  }
}

module.exports = StaffoftheDeathMagus;

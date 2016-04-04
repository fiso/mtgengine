"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StaffoftheSunMagusBase = require("../setM14/StaffoftheSunMagus.js");

class StaffoftheSunMagus extends StaffoftheSunMagusBase {
  constructor(game) {
    super(game, "Staff of the Sun Magus", "Magic 2015 Core Set", "M15");
  }
}

module.exports = StaffoftheSunMagus;

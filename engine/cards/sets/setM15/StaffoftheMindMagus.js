"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StaffoftheMindMagusBase = require("../setM14/StaffoftheMindMagus.js");

class StaffoftheMindMagus extends StaffoftheMindMagusBase {
  constructor(game) {
    super(game, "Staff of the Mind Magus", "Magic 2015 Core Set", "M15");
  }
}

module.exports = StaffoftheMindMagus;

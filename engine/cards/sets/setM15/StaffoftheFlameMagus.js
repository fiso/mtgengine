"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StaffoftheFlameMagusBase = require("../setM14/StaffoftheFlameMagus.js");

class StaffoftheFlameMagus extends StaffoftheFlameMagusBase {
  constructor(game) {
    super(game, "Staff of the Flame Magus", "Magic 2015 Core Set", "M15");
  }
}

module.exports = StaffoftheFlameMagus;

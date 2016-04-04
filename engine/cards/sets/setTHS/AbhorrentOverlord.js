"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AbhorrentOverlordBase = require("../setpPRE/AbhorrentOverlord.js");

class AbhorrentOverlord extends AbhorrentOverlordBase {
  constructor(game) {
    super(game, "Abhorrent Overlord", "Theros", "THS");
  }
}

module.exports = AbhorrentOverlord;

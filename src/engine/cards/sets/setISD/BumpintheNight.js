"use strict";
const Constants = require ("../../../Constants");
const BumpintheNightBase = require("../setDDK/BumpintheNight");

class BumpintheNight extends BumpintheNightBase {
  constructor (game) {
    super(game, "Bump in the Night", "Innistrad", "ISD");
  }
}

module.exports = BumpintheNight;

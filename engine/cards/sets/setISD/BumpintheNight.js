"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BumpintheNightBase = require("../setDDK/BumpintheNight.js");

class BumpintheNight extends BumpintheNightBase {
  constructor(game) {
    super(game, "Bump in the Night", "Innistrad", "ISD");
  }
}

module.exports = BumpintheNight;

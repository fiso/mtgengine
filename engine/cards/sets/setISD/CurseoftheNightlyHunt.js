"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CurseoftheNightlyHuntBase = require("../setC15/CurseoftheNightlyHunt.js");

class CurseoftheNightlyHunt extends CurseoftheNightlyHuntBase {
  constructor(game) {
    super(game, "Curse of the Nightly Hunt", "Innistrad", "ISD");
  }
}

module.exports = CurseoftheNightlyHunt;

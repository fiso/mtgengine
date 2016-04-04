"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SquadronHawkBase = require("../setpFNM/SquadronHawk.js");

class SquadronHawk extends SquadronHawkBase {
  constructor(game) {
    super(game, "Squadron Hawk", "Magic 2011", "M11");
  }
}

module.exports = SquadronHawk;

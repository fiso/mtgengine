"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StoketheFlamesBase = require("../setpFNM/StoketheFlames.js");

class StoketheFlames extends StoketheFlamesBase {
  constructor(game) {
    super(game, "Stoke the Flames", "Magic 2015 Core Set", "M15");
  }
}

module.exports = StoketheFlames;

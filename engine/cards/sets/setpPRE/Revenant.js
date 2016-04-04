"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RevenantBase = require("../setORI/Revenant.js");

class Revenant extends RevenantBase {
  constructor(game) {
    super(game, "Revenant", "Prerelease Events", "pPRE");
  }
}

module.exports = Revenant;

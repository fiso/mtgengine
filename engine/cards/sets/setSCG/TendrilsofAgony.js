"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TendrilsofAgonyBase = require("../setpFNM/TendrilsofAgony.js");

class TendrilsofAgony extends TendrilsofAgonyBase {
  constructor(game) {
    super(game, "Tendrils of Agony", "Scourge", "SCG");
  }
}

module.exports = TendrilsofAgony;

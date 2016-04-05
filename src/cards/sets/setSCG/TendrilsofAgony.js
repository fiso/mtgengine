"use strict";
const Constants = require ("../../../Constants");
const TendrilsofAgonyBase = require("../setpFNM/TendrilsofAgony");

class TendrilsofAgony extends TendrilsofAgonyBase {
  constructor(game) {
    super(game, "Tendrils of Agony", "Scourge", "SCG");
  }
}

module.exports = TendrilsofAgony;

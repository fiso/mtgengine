"use strict";
const Constants = require ("../../../Constants");
const DarksteelCitadelBase = require("../setC14/DarksteelCitadel");

class DarksteelCitadel extends DarksteelCitadelBase {
  constructor(game) {
    super(game, "Darksteel Citadel", "Darksteel", "DST");
  }
}

module.exports = DarksteelCitadel;

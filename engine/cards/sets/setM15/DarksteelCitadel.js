"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DarksteelCitadelBase = require("../setC14/DarksteelCitadel.js");

class DarksteelCitadel extends DarksteelCitadelBase {
  constructor(game) {
    super(game, "Darksteel Citadel", "Magic 2015 Core Set", "M15");
  }
}

module.exports = DarksteelCitadel;

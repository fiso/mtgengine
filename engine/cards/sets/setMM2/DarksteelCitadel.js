"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DarksteelCitadelBase = require("../setC14/DarksteelCitadel.js");

class DarksteelCitadel extends DarksteelCitadelBase {
  constructor(game) {
    super(game, "Darksteel Citadel", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = DarksteelCitadel;

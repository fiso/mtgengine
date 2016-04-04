"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SelesnyaEvangelBase = require("../setCMD/SelesnyaEvangel.js");

class SelesnyaEvangel extends SelesnyaEvangelBase {
  constructor(game) {
    super(game, "Selesnya Evangel", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = SelesnyaEvangel;

"use strict";
const Constants = require ("../../../Constants");
const SelesnyaEvangelBase = require("../setCMD/SelesnyaEvangel");

class SelesnyaEvangel extends SelesnyaEvangelBase {
  constructor(game) {
    super(game, "Selesnya Evangel", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = SelesnyaEvangel;

"use strict";
const Constants = require ("../../../Constants");
const RitesofFlourishingBase = require("../setC16/RitesofFlourishing");

class RitesofFlourishing extends RitesofFlourishingBase {
  constructor (game) {
    super(game, "Rites of Flourishing", "Future Sight", "FUT");
  }
}

module.exports = RitesofFlourishing;

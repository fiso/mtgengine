"use strict";
const Constants = require ("../../../Constants");
const RitesofFlourishingBase = require("../setFUT/RitesofFlourishing");

class RitesofFlourishing extends RitesofFlourishingBase {
  constructor(game) {
    super(game, "Rites of Flourishing", "Magic 2012", "M12");
  }
}

module.exports = RitesofFlourishing;

"use strict";
const Constants = require ("../../../Constants");
const VillainousWealthBase = require("../setKTK/VillainousWealth");

class VillainousWealth extends VillainousWealthBase {
  constructor (game) {
    super(game, "Villainous Wealth", "Khans of Tarkir Promos", "PKTK");
  }
}

module.exports = VillainousWealth;

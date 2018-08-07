"use strict";
const Constants = require ("../../../Constants");
const IslandSanctuaryBase = require("../setME4/IslandSanctuary");

class IslandSanctuary extends IslandSanctuaryBase {
  constructor (game) {
    super(game, "Island Sanctuary", "Limited Edition Beta", "LEB");
  }
}

module.exports = IslandSanctuary;

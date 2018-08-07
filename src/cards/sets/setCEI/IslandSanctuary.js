"use strict";
const Constants = require ("../../../Constants");
const IslandSanctuaryBase = require("../setME4/IslandSanctuary");

class IslandSanctuary extends IslandSanctuaryBase {
  constructor (game) {
    super(game, "Island Sanctuary", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = IslandSanctuary;

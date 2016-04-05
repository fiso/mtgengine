"use strict";
const Constants = require ("../../../Constants");
const IslandSanctuaryBase = require("../setCED/IslandSanctuary");

class IslandSanctuary extends IslandSanctuaryBase {
  constructor(game) {
    super(game, "Island Sanctuary", "Limited Edition Alpha", "LEA");
  }
}

module.exports = IslandSanctuary;

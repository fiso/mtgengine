"use strict";
const Constants = require ("../../../Constants");
const IslandSanctuaryBase = require("../setCED/IslandSanctuary");

class IslandSanctuary extends IslandSanctuaryBase {
  constructor(game) {
    super(game, "Island Sanctuary", "Unlimited Edition", "2ED");
  }
}

module.exports = IslandSanctuary;

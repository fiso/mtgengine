"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZombieOutlander extends UnimplementedCard {
  constructor(game) {
    super(game, "Zombie Outlander", "Conflux", "CON");
  }
}

module.exports = ZombieOutlander;

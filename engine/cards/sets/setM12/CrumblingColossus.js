"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CrumblingColossus extends Card {
  constructor(game) {
    super(game, "Crumbling Colossus", "Magic 2012", "M12");
  }
}

module.exports = CrumblingColossus;

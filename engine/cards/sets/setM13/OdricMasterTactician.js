"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OdricMasterTactician extends Card {
  constructor(game) {
    super(game, "Odric, Master Tactician", "Magic 2013", "M13");
  }
}

module.exports = OdricMasterTactician;

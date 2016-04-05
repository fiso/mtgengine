"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OdricMasterTactician extends UnimplementedCard {
  constructor(game) {
    super(game, "Odric, Master Tactician", "Magic 2013", "M13");
  }
}

module.exports = OdricMasterTactician;

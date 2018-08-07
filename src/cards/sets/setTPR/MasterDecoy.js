"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MasterDecoy extends UnimplementedCard {
  constructor (game) {
    super(game, "Master Decoy", "Tempest Remastered", "TPR");
  }
}

module.exports = MasterDecoy;

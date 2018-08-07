"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Cataclysm extends UnimplementedCard {
  constructor (game) {
    super(game, "Cataclysm", "Tempest Remastered", "TPR");
  }
}

module.exports = Cataclysm;

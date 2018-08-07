"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Necrologia extends UnimplementedCard {
  constructor (game) {
    super(game, "Necrologia", "Tempest Remastered", "TPR");
  }
}

module.exports = Necrologia;

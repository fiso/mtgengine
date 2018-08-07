"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Scabland extends UnimplementedCard {
  constructor (game) {
    super(game, "Scabland", "Tempest Remastered", "TPR");
  }
}

module.exports = Scabland;

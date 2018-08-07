"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManiacalRage extends UnimplementedCard {
  constructor (game) {
    super(game, "Maniacal Rage", "Tempest Remastered", "TPR");
  }
}

module.exports = ManiacalRage;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TowerofMurmurs extends UnimplementedCard {
  constructor(game) {
    super(game, "Tower of Murmurs", "Mirrodin", "MRD");
  }
}

module.exports = TowerofMurmurs;

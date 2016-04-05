"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TowerofCoireall extends UnimplementedCard {
  constructor(game) {
    super(game, "Tower of Coireall", "The Dark", "DRK");
  }
}

module.exports = TowerofCoireall;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ToweringBaloth extends UnimplementedCard {
  constructor(game) {
    super(game, "Towering Baloth", "Onslaught", "ONS");
  }
}

module.exports = ToweringBaloth;

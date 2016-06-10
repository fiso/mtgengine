"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IvoryTower extends UnimplementedCard {
  constructor (game) {
    super(game, "Ivory Tower", "Antiquities", "ATQ");
  }
}

module.exports = IvoryTower;

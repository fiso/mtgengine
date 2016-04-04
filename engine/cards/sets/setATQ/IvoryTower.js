"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IvoryTower extends Card {
  constructor(game) {
    super(game, "Ivory Tower", "Antiquities", "ATQ");
  }
}

module.exports = IvoryTower;

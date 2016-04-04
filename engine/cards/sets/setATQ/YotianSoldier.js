"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class YotianSoldier extends Card {
  constructor(game) {
    super(game, "Yotian Soldier", "Antiquities", "ATQ");
  }
}

module.exports = YotianSoldier;

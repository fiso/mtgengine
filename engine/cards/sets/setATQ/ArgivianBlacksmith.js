"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArgivianBlacksmith extends Card {
  constructor(game) {
    super(game, "Argivian Blacksmith", "Antiquities", "ATQ");
  }
}

module.exports = ArgivianBlacksmith;

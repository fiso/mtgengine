"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BattlefieldPercher extends Card {
  constructor(game) {
    super(game, "Battlefield Percher", "Nemesis", "NMS");
  }
}

module.exports = BattlefieldPercher;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CloudDragon extends Card {
  constructor(game) {
    super(game, "Cloud Dragon", "Masters Edition IV", "ME4");
  }
}

module.exports = CloudDragon;

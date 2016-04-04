"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EssenceBottle extends Card {
  constructor(game) {
    super(game, "Essence Bottle", "Tempest", "TMP");
  }
}

module.exports = EssenceBottle;

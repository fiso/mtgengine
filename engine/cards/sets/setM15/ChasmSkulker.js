"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChasmSkulker extends Card {
  constructor(game) {
    super(game, "Chasm Skulker", "Magic 2015 Core Set", "M15");
  }
}

module.exports = ChasmSkulker;

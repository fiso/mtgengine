"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CerebralEruption extends Card {
  constructor(game) {
    super(game, "Cerebral Eruption", "Scars of Mirrodin", "SOM");
  }
}

module.exports = CerebralEruption;

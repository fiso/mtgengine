"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AkromasMemorial extends Card {
  constructor(game) {
    super(game, "Akroma's Memorial", "Future Sight", "FUT");
  }
}

module.exports = AkromasMemorial;

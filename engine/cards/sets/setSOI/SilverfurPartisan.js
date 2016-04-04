"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SilverfurPartisan extends Card {
  constructor(game) {
    super(game, "Silverfur Partisan", "Shadows over Innistrad", "SOI");
  }
}

module.exports = SilverfurPartisan;

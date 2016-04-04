"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AerialVolley extends Card {
  constructor(game) {
    super(game, "Aerial Volley", "Magic Origins", "ORI");
  }
}

module.exports = AerialVolley;

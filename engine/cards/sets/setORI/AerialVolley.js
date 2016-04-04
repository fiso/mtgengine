"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AerialVolley extends UnimplementedCard {
  constructor(game) {
    super(game, "Aerial Volley", "Magic Origins", "ORI");
  }
}

module.exports = AerialVolley;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VolleyVeteran extends UnimplementedCard {
  constructor (game) {
    super(game, "Volley Veteran", "Core Set 2019", "M19");
  }
}

module.exports = VolleyVeteran;

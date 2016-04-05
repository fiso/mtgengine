"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Thunderblust extends UnimplementedCard {
  constructor(game) {
    super(game, "Thunderblust", "Eventide", "EVE");
  }
}

module.exports = Thunderblust;

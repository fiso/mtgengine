"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HiredBlade extends UnimplementedCard {
  constructor (game) {
    super(game, "Hired Blade", "Core Set 2019", "M19");
  }
}

module.exports = HiredBlade;

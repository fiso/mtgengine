"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NightDay extends UnimplementedCard {
  constructor (game) {
    super(game, "Night // Day", "Apocalypse", "APC");
  }
}

module.exports = NightDay;

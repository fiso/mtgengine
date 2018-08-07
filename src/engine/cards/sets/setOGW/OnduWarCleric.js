"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OnduWarCleric extends UnimplementedCard {
  constructor (game) {
    super(game, "Ondu War Cleric", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = OnduWarCleric;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AllHallowsEve extends UnimplementedCard {
  constructor (game) {
    super(game, "All Hallow's Eve", "Legends", "LEG");
  }
}

module.exports = AllHallowsEve;

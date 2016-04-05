"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvatarofMe extends UnimplementedCard {
  constructor(game) {
    super(game, "Avatar of Me", "Unhinged", "UNH");
  }
}

module.exports = AvatarofMe;

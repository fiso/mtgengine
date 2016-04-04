"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZombieFanboy extends UnimplementedCard {
  constructor(game) {
    super(game, "Zombie Fanboy", "Unhinged", "UNH");
  }
}

module.exports = ZombieFanboy;

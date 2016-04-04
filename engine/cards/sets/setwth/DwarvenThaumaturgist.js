"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DwarvenThaumaturgist extends Card {
  constructor(game) {
    super(game, "Dwarven Thaumaturgist", "Weatherlight", "WTH");
  }
}

module.exports = DwarvenThaumaturgist;

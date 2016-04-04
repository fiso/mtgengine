"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ZombieFanboy extends Card {
  constructor(game) {
    super(game, "Zombie Fanboy", "Unhinged", "UNH");
  }
}

module.exports = ZombieFanboy;

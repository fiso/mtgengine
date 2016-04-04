"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ZombieMaster extends Card {
  constructor(game) {
    super(game, "Zombie Master", "Classic Sixth Edition", "6ED");
  }
}

module.exports = ZombieMaster;

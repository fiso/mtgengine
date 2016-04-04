"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DregscapeZombieBase = require("../setARC/DregscapeZombie.js");

class DregscapeZombie extends DregscapeZombieBase {
  constructor(game) {
    super(game, "Dregscape Zombie", "Planechase", "HOP");
  }
}

module.exports = DregscapeZombie;

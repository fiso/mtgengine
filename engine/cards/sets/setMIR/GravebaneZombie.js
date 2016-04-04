"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GravebaneZombieBase = require("../set6ED/GravebaneZombie.js");

class GravebaneZombie extends GravebaneZombieBase {
  constructor(game) {
    super(game, "Gravebane Zombie", "Mirage", "MIR");
  }
}

module.exports = GravebaneZombie;

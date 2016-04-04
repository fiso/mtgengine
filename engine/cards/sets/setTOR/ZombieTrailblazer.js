"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ZombieTrailblazer extends Card {
  constructor(game) {
    super(game, "Zombie Trailblazer", "Torment", "TOR");
  }
}

module.exports = ZombieTrailblazer;

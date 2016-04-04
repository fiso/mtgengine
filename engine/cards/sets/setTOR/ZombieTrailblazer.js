"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZombieTrailblazer extends UnimplementedCard {
  constructor(game) {
    super(game, "Zombie Trailblazer", "Torment", "TOR");
  }
}

module.exports = ZombieTrailblazer;

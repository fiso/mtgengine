"use strict";
const Constants = require ("../../../Constants");
const SpurnmageAdvocateBase = require("../setJUD/SpurnmageAdvocate");

class SpurnmageAdvocate extends SpurnmageAdvocateBase {
  constructor (game) {
    super(game, "Spurnmage Advocate", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = SpurnmageAdvocate;

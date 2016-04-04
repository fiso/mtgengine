"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpurnmageAdvocateBase = require("../setJUD/SpurnmageAdvocate.js");

class SpurnmageAdvocate extends SpurnmageAdvocateBase {
  constructor(game) {
    super(game, "Spurnmage Advocate", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = SpurnmageAdvocate;

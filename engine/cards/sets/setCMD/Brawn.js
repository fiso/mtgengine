"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BrawnBase = require("../setJUD/Brawn.js");

class Brawn extends BrawnBase {
  constructor(game) {
    super(game, "Brawn", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Brawn;

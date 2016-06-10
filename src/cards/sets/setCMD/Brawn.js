"use strict";
const Constants = require ("../../../Constants");
const BrawnBase = require("../setJUD/Brawn");

class Brawn extends BrawnBase {
  constructor (game) {
    super(game, "Brawn", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Brawn;

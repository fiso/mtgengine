"use strict";
const Constants = require ("../../../Constants");
const HallowedBurialBase = require("../setCN2/HallowedBurial");

class HallowedBurial extends HallowedBurialBase {
  constructor (game) {
    super(game, "Hallowed Burial", "Eventide", "EVE");
  }
}

module.exports = HallowedBurial;

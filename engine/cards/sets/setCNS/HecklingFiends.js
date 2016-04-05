"use strict";
const Constants = require ("../../../Constants");
const HecklingFiendsBase = require("../setDKA/HecklingFiends");

class HecklingFiends extends HecklingFiendsBase {
  constructor(game) {
    super(game, "Heckling Fiends", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = HecklingFiends;

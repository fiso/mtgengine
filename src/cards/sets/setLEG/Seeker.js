"use strict";
const Constants = require ("../../../Constants");
const SeekerBase = require("../set4ED/Seeker");

class Seeker extends SeekerBase {
  constructor (game) {
    super(game, "Seeker", "Legends", "LEG");
  }
}

module.exports = Seeker;

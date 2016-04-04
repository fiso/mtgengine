"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ElvenLyreBase = require("../setFEM/ElvenLyre.js");

class ElvenLyre extends ElvenLyreBase {
  constructor(game) {
    super(game, "Elven Lyre", "Masters Edition II", "ME2");
  }
}

module.exports = ElvenLyre;

"use strict";
const Constants = require ("../../../Constants");
const WorshipBase = require("../setMP2/Worship");

class Worship extends WorshipBase {
  constructor (game) {
    super(game, "Worship", "Urza's Saga", "USG");
  }
}

module.exports = Worship;

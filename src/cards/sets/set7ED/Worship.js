"use strict";
const Constants = require ("../../../Constants");
const WorshipBase = require("../set8ED/Worship");

class Worship extends WorshipBase {
  constructor (game) {
    super(game, "Worship", "Seventh Edition", "7ED");
  }
}

module.exports = Worship;

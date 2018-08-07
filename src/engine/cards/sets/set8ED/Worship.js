"use strict";
const Constants = require ("../../../Constants");
const WorshipBase = require("../setMP2/Worship");

class Worship extends WorshipBase {
  constructor (game) {
    super(game, "Worship", "Eighth Edition", "8ED");
  }
}

module.exports = Worship;

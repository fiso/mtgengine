"use strict";
const Constants = require ("../../../Constants");
const WorshipBase = require("../set8ED/Worship");

class Worship extends WorshipBase {
  constructor(game) {
    super(game, "Worship", "Ninth Edition", "9ED");
  }
}

module.exports = Worship;

"use strict";
const Constants = require ("../../../Constants");
const TidingsBase = require("../setpMPR/Tidings");

class Tidings extends TidingsBase {
  constructor (game) {
    super(game, "Tidings", "Ninth Edition", "9ED");
  }
}

module.exports = Tidings;

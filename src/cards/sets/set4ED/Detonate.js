"use strict";
const Constants = require ("../../../Constants");
const DetonateBase = require("../setATQ/Detonate");

class Detonate extends DetonateBase {
  constructor (game) {
    super(game, "Detonate", "Fourth Edition", "4ED");
  }
}

module.exports = Detonate;

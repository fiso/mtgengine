"use strict";
const Constants = require ("../../../Constants");
const DetonateBase = require("../setATQ/Detonate");

class Detonate extends DetonateBase {
  constructor (game) {
    super(game, "Detonate", "Fifth Edition", "5ED");
  }
}

module.exports = Detonate;

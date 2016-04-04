"use strict";
const Constants = require ("../../../Constants");
const CommunewithNatureBase = require("../setCHK/CommunewithNature");

class CommunewithNature extends CommunewithNatureBase {
  constructor(game) {
    super(game, "Commune with Nature", "Tenth Edition", "10E");
  }
}

module.exports = CommunewithNature;

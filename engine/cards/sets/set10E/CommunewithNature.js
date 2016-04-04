"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CommunewithNatureBase = require("../setCHK/CommunewithNature.js");

class CommunewithNature extends CommunewithNatureBase {
  constructor(game) {
    super(game, "Commune with Nature", "Tenth Edition", "10E");
  }
}

module.exports = CommunewithNature;

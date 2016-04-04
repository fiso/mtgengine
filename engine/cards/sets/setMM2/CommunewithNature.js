"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CommunewithNatureBase = require("../setCHK/CommunewithNature.js");

class CommunewithNature extends CommunewithNatureBase {
  constructor(game) {
    super(game, "Commune with Nature", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = CommunewithNature;

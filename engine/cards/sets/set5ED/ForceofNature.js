"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ForceofNatureBase = require("../setBTD/ForceofNature.js");

class ForceofNature extends ForceofNatureBase {
  constructor(game) {
    super(game, "Force of Nature", "Fifth Edition", "5ED");
  }
}

module.exports = ForceofNature;

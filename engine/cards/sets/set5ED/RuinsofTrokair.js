"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RuinsofTrokairBase = require("../set6ED/RuinsofTrokair.js");

class RuinsofTrokair extends RuinsofTrokairBase {
  constructor(game) {
    super(game, "Ruins of Trokair", "Fifth Edition", "5ED");
  }
}

module.exports = RuinsofTrokair;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CreakwoodLiegeBase = require("../setEVE/CreakwoodLiege.js");

class CreakwoodLiege extends CreakwoodLiegeBase {
  constructor(game) {
    super(game, "Creakwood Liege", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = CreakwoodLiege;

"use strict";
const Constants = require ("../../../Constants");
const CreakwoodLiegeBase = require("../setEVE/CreakwoodLiege");

class CreakwoodLiege extends CreakwoodLiegeBase {
  constructor (game) {
    super(game, "Creakwood Liege", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = CreakwoodLiege;

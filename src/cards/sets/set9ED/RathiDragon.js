"use strict";
const Constants = require ("../../../Constants");
const RathiDragonBase = require("../setTPR/RathiDragon");

class RathiDragon extends RathiDragonBase {
  constructor (game) {
    super(game, "Rathi Dragon", "Ninth Edition", "9ED");
  }
}

module.exports = RathiDragon;

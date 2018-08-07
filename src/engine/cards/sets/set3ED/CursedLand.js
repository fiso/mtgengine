"use strict";
const Constants = require ("../../../Constants");
const CursedLandBase = require("../set5ED/CursedLand");

class CursedLand extends CursedLandBase {
  constructor (game) {
    super(game, "Cursed Land", "Revised Edition", "3ED");
  }
}

module.exports = CursedLand;

"use strict";
const Constants = require ("../../../Constants");
const TawnossWandBase = require("../setATQ/TawnossWand");

class TawnossWand extends TawnossWandBase {
  constructor (game) {
    super(game, "Tawnos's Wand", "Fourth Edition", "4ED");
  }
}

module.exports = TawnossWand;

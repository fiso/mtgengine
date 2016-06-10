"use strict";
const Constants = require ("../../../Constants");
const TawnossWandBase = require("../setATQ/TawnossWand");

class TawnossWand extends TawnossWandBase {
  constructor (game) {
    super(game, "Tawnos's Wand", "Masters Edition IV", "ME4");
  }
}

module.exports = TawnossWand;

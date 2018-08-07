"use strict";
const Constants = require ("../../../Constants");
const TawnossWandBase = require("../setME4/TawnossWand");

class TawnossWand extends TawnossWandBase {
  constructor (game) {
    super(game, "Tawnos's Wand", "Antiquities", "ATQ");
  }
}

module.exports = TawnossWand;

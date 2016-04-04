"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TawnossWandBase = require("../setATQ/TawnossWand.js");

class TawnossWand extends TawnossWandBase {
  constructor(game) {
    super(game, "Tawnos's Wand", "Fourth Edition", "4ED");
  }
}

module.exports = TawnossWand;

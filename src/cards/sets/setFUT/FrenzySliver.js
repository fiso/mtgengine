"use strict";
const Constants = require ("../../../Constants");
const FrenzySliverBase = require("../setH09/FrenzySliver");

class FrenzySliver extends FrenzySliverBase {
  constructor (game) {
    super(game, "Frenzy Sliver", "Future Sight", "FUT");
  }
}

module.exports = FrenzySliver;

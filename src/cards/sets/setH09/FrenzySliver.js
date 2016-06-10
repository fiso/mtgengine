"use strict";
const Constants = require ("../../../Constants");
const FrenzySliverBase = require("../setFUT/FrenzySliver");

class FrenzySliver extends FrenzySliverBase {
  constructor (game) {
    super(game, "Frenzy Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = FrenzySliver;

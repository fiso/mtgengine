"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FrenzySliverBase = require("../setFUT/FrenzySliver.js");

class FrenzySliver extends FrenzySliverBase {
  constructor(game) {
    super(game, "Frenzy Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = FrenzySliver;

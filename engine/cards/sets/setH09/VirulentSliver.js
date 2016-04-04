"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VirulentSliverBase = require("../setFUT/VirulentSliver.js");

class VirulentSliver extends VirulentSliverBase {
  constructor(game) {
    super(game, "Virulent Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = VirulentSliver;

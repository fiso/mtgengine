"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AncientZigguratBase = require("../setCON/AncientZiggurat.js");

class AncientZiggurat extends AncientZigguratBase {
  constructor(game) {
    super(game, "Ancient Ziggurat", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = AncientZiggurat;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RootboundCragBase = require("../setM10/RootboundCrag.js");

class RootboundCrag extends RootboundCragBase {
  constructor(game) {
    super(game, "Rootbound Crag", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = RootboundCrag;

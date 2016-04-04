"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RootboundCragBase = require("../setM10/RootboundCrag.js");

class RootboundCrag extends RootboundCragBase {
  constructor(game) {
    super(game, "Rootbound Crag", "Magic 2012", "M12");
  }
}

module.exports = RootboundCrag;

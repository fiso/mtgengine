"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArcboundStingerBase = require("../setDST/ArcboundStinger.js");

class ArcboundStinger extends ArcboundStingerBase {
  constructor(game) {
    super(game, "Arcbound Stinger", "Modern Masters", "MMA");
  }
}

module.exports = ArcboundStinger;

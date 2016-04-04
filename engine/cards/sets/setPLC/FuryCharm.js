"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FuryCharmBase = require("../setMMA/FuryCharm.js");

class FuryCharm extends FuryCharmBase {
  constructor(game) {
    super(game, "Fury Charm", "Planar Chaos", "PLC");
  }
}

module.exports = FuryCharm;

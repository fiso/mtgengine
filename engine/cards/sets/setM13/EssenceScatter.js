"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EssenceScatterBase = require("../setDPA/EssenceScatter.js");

class EssenceScatter extends EssenceScatterBase {
  constructor(game) {
    super(game, "Essence Scatter", "Magic 2013", "M13");
  }
}

module.exports = EssenceScatter;

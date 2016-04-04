"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DreampodDruidBase = require("../setPC2/DreampodDruid.js");

class DreampodDruid extends DreampodDruidBase {
  constructor(game) {
    super(game, "Dreampod Druid", "Vintage Masters", "VMA");
  }
}

module.exports = DreampodDruid;

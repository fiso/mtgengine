"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StormEntityBase = require("../setFUT/StormEntity.js");

class StormEntity extends StormEntityBase {
  constructor(game) {
    super(game, "Storm Entity", "Release Events", "pREL");
  }
}

module.exports = StormEntity;

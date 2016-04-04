"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DancingScimitarBase = require("../setARN/DancingScimitar.js");

class DancingScimitar extends DancingScimitarBase {
  constructor(game) {
    super(game, "Dancing Scimitar", "Classic Sixth Edition", "6ED");
  }
}

module.exports = DancingScimitar;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GiantCaterpillarBase = require("../setMMQ/GiantCaterpillar.js");

class GiantCaterpillar extends GiantCaterpillarBase {
  constructor(game) {
    super(game, "Giant Caterpillar", "Visions", "VIS");
  }
}

module.exports = GiantCaterpillar;

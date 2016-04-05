"use strict";
const Constants = require ("../../../Constants");
const GiantCaterpillarBase = require("../setMMQ/GiantCaterpillar");

class GiantCaterpillar extends GiantCaterpillarBase {
  constructor(game) {
    super(game, "Giant Caterpillar", "Visions", "VIS");
  }
}

module.exports = GiantCaterpillar;

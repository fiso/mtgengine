"use strict";
const Constants = require ("../../../Constants");
const CullingDaisBase = require("../setBBD/CullingDais");

class CullingDais extends CullingDaisBase {
  constructor (game) {
    super(game, "Culling Dais", "Modern Masters 2015", "MM2");
  }
}

module.exports = CullingDais;

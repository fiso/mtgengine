"use strict";
const Constants = require ("../../../Constants");
const CullingDaisBase = require("../setBBD/CullingDais");

class CullingDais extends CullingDaisBase {
  constructor (game) {
    super(game, "Culling Dais", "Scars of Mirrodin", "SOM");
  }
}

module.exports = CullingDais;

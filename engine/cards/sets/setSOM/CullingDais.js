"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CullingDaisBase = require("../setMM2/CullingDais.js");

class CullingDais extends CullingDaisBase {
  constructor(game) {
    super(game, "Culling Dais", "Scars of Mirrodin", "SOM");
  }
}

module.exports = CullingDais;

"use strict";
const Constants = require ("../../../Constants");
const TriangleofWarBase = require("../setVMA/TriangleofWar");

class TriangleofWar extends TriangleofWarBase {
  constructor (game) {
    super(game, "Triangle of War", "Visions", "VIS");
  }
}

module.exports = TriangleofWar;

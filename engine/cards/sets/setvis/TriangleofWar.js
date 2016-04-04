"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TriangleofWarBase = require("../setVMA/TriangleofWar.js");

class TriangleofWar extends TriangleofWarBase {
  constructor(game) {
    super(game, "Triangle of War", "Visions", "VIS");
  }
}

module.exports = TriangleofWar;

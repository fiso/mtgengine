"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ExtirpateBase = require("../setMMA/Extirpate.js");

class Extirpate extends ExtirpateBase {
  constructor(game) {
    super(game, "Extirpate", "Planar Chaos", "PLC");
  }
}

module.exports = Extirpate;

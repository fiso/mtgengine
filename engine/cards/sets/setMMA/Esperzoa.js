"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EsperzoaBase = require("../setCON/Esperzoa.js");

class Esperzoa extends EsperzoaBase {
  constructor(game) {
    super(game, "Esperzoa", "Modern Masters", "MMA");
  }
}

module.exports = Esperzoa;

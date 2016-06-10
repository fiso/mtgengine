"use strict";
const Constants = require ("../../../Constants");
const EsperzoaBase = require("../setCON/Esperzoa");

class Esperzoa extends EsperzoaBase {
  constructor (game) {
    super(game, "Esperzoa", "Modern Masters", "MMA");
  }
}

module.exports = Esperzoa;

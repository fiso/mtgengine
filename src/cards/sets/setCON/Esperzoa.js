"use strict";
const Constants = require ("../../../Constants");
const EsperzoaBase = require("../setMMA/Esperzoa");

class Esperzoa extends EsperzoaBase {
  constructor (game) {
    super(game, "Esperzoa", "Conflux", "CON");
  }
}

module.exports = Esperzoa;

"use strict";
const Constants = require ("../../../Constants");
const ExquisiteArchangelBase = require("../setAER/ExquisiteArchangel");

class ExquisiteArchangel extends ExquisiteArchangelBase {
  constructor (game) {
    super(game, "Exquisite Archangel", "Aether Revolt Promos", "PAER");
  }
}

module.exports = ExquisiteArchangel;

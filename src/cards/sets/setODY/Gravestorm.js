"use strict";
const Constants = require ("../../../Constants");
const GravestormBase = require("../setPHUK/Gravestorm");

class Gravestorm extends GravestormBase {
  constructor (game) {
    super(game, "Gravestorm", "Odyssey", "ODY");
  }
}

module.exports = Gravestorm;

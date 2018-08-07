"use strict";
const Constants = require ("../../../Constants");
const MorbidCuriosityBase = require("../setBBD/MorbidCuriosity");

class MorbidCuriosity extends MorbidCuriosityBase {
  constructor (game) {
    super(game, "Morbid Curiosity", "Kaladesh", "KLD");
  }
}

module.exports = MorbidCuriosity;

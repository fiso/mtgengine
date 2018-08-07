"use strict";
const Constants = require ("../../../Constants");
const MurasaBase = require("../setPCA/Murasa");

class Murasa extends MurasaBase {
  constructor (game) {
    super(game, "Murasa", "Planechase", "HOP");
  }
}

module.exports = Murasa;

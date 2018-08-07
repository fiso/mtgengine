"use strict";
const Constants = require ("../../../Constants");
const RoterothopterBase = require("../setME2/Roterothopter");

class Roterothopter extends RoterothopterBase {
  constructor (game) {
    super(game, "Roterothopter", "Homelands", "HML");
  }
}

module.exports = Roterothopter;

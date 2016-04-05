"use strict";
const Constants = require ("../../../Constants");
const RoterothopterBase = require("../setHML/Roterothopter");

class Roterothopter extends RoterothopterBase {
  constructor(game) {
    super(game, "Roterothopter", "Masters Edition II", "ME2");
  }
}

module.exports = Roterothopter;

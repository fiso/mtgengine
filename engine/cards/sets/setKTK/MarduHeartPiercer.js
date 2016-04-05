"use strict";
const Constants = require ("../../../Constants");
const MarduHeartPiercerBase = require("../setDDN/MarduHeartPiercer");

class MarduHeartPiercer extends MarduHeartPiercerBase {
  constructor(game) {
    super(game, "Mardu Heart-Piercer", "Khans of Tarkir", "KTK");
  }
}

module.exports = MarduHeartPiercer;

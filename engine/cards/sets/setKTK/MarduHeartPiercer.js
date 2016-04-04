"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MarduHeartPiercerBase = require("../setDDN/MarduHeartPiercer.js");

class MarduHeartPiercer extends MarduHeartPiercerBase {
  constructor(game) {
    super(game, "Mardu Heart-Piercer", "Khans of Tarkir", "KTK");
  }
}

module.exports = MarduHeartPiercer;

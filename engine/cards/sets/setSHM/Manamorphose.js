"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ManamorphoseBase = require("../setMMA/Manamorphose.js");

class Manamorphose extends ManamorphoseBase {
  constructor(game) {
    super(game, "Manamorphose", "Shadowmoor", "SHM");
  }
}

module.exports = Manamorphose;

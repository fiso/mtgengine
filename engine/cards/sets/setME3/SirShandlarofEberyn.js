"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SirShandlarofEberynBase = require("../setLEG/SirShandlarofEberyn.js");

class SirShandlarofEberyn extends SirShandlarofEberynBase {
  constructor(game) {
    super(game, "Sir Shandlar of Eberyn", "Masters Edition III", "ME3");
  }
}

module.exports = SirShandlarofEberyn;

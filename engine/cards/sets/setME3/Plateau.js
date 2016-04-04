"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PlateauBase = require("../setCED/Plateau.js");

class Plateau extends PlateauBase {
  constructor(game) {
    super(game, "Plateau", "Masters Edition III", "ME3");
  }
}

module.exports = Plateau;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MagnivoreBase = require("../set9ED/Magnivore.js");

class Magnivore extends MagnivoreBase {
  constructor(game) {
    super(game, "Magnivore", "Odyssey", "ODY");
  }
}

module.exports = Magnivore;

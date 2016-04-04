"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SmallpoxBase = require("../setM12/Smallpox.js");

class Smallpox extends SmallpoxBase {
  constructor(game) {
    super(game, "Smallpox", "Time Spiral", "TSP");
  }
}

module.exports = Smallpox;

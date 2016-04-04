"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GuileBase = require("../setDD3_JVC/Guile.js");

class Guile extends GuileBase {
  constructor(game) {
    super(game, "Guile", "Lorwyn", "LRW");
  }
}

module.exports = Guile;

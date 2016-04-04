"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TundraBase = require("../setCED/Tundra.js");

class Tundra extends TundraBase {
  constructor(game) {
    super(game, "Tundra", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Tundra;

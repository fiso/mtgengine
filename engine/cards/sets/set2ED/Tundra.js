"use strict";
const Constants = require ("../../../Constants");
const TundraBase = require("../setCED/Tundra");

class Tundra extends TundraBase {
  constructor(game) {
    super(game, "Tundra", "Unlimited Edition", "2ED");
  }
}

module.exports = Tundra;

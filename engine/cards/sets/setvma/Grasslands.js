"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GrasslandsBase = require("../setDDG/Grasslands.js");

class Grasslands extends GrasslandsBase {
  constructor(game) {
    super(game, "Grasslands", "Vintage Masters", "VMA");
  }
}

module.exports = Grasslands;

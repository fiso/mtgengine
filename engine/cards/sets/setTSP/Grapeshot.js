"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GrapeshotBase = require("../setMMA/Grapeshot.js");

class Grapeshot extends GrapeshotBase {
  constructor(game) {
    super(game, "Grapeshot", "Time Spiral", "TSP");
  }
}

module.exports = Grapeshot;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FlametongueKavuBase = require("../setC14/FlametongueKavu.js");

class FlametongueKavu extends FlametongueKavuBase {
  constructor(game) {
    super(game, "Flametongue Kavu", "Planeshift", "PLS");
  }
}

module.exports = FlametongueKavu;

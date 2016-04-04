"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const YavimayaDryadBase = require("../setARC/YavimayaDryad.js");

class YavimayaDryad extends YavimayaDryadBase {
  constructor(game) {
    super(game, "Yavimaya Dryad", "Time Spiral", "TSP");
  }
}

module.exports = YavimayaDryad;

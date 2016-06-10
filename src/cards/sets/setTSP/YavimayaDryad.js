"use strict";
const Constants = require ("../../../Constants");
const YavimayaDryadBase = require("../setARC/YavimayaDryad");

class YavimayaDryad extends YavimayaDryadBase {
  constructor (game) {
    super(game, "Yavimaya Dryad", "Time Spiral", "TSP");
  }
}

module.exports = YavimayaDryad;

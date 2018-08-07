"use strict";
const Constants = require ("../../../Constants");
const NoyanDarRoilShaperBase = require("../setBFZ/NoyanDarRoilShaper");

class NoyanDarRoilShaper extends NoyanDarRoilShaperBase {
  constructor (game) {
    super(game, "Noyan Dar, Roil Shaper", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = NoyanDarRoilShaper;

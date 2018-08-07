"use strict";
const Constants = require ("../../../Constants");
const SeismicRuptureBase = require("../setMTGA/SeismicRupture");

class SeismicRupture extends SeismicRuptureBase {
  constructor (game) {
    super(game, "Seismic Rupture", "Dragons of Tarkir", "DTK");
  }
}

module.exports = SeismicRupture;

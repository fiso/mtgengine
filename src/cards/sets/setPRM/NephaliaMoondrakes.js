"use strict";
const Constants = require ("../../../Constants");
const NephaliaMoondrakesBase = require("../setSOI/NephaliaMoondrakes");

class NephaliaMoondrakes extends NephaliaMoondrakesBase {
  constructor (game) {
    super(game, "Nephalia Moondrakes", "Magic Online Promos", "PRM");
  }
}

module.exports = NephaliaMoondrakes;

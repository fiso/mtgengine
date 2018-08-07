"use strict";
const Constants = require ("../../../Constants");
const IcefallRegentBase = require("../setE01/IcefallRegent");

class IcefallRegent extends IcefallRegentBase {
  constructor (game) {
    super(game, "Icefall Regent", "Dragons of Tarkir Promos", "PDTK");
  }
}

module.exports = IcefallRegent;

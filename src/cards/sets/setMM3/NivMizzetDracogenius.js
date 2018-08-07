"use strict";
const Constants = require ("../../../Constants");
const NivMizzetDracogeniusBase = require("../setC17/NivMizzetDracogenius");

class NivMizzetDracogenius extends NivMizzetDracogeniusBase {
  constructor (game) {
    super(game, "Niv-Mizzet, Dracogenius", "Modern Masters 2017", "MM3");
  }
}

module.exports = NivMizzetDracogenius;

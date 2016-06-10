"use strict";
const Constants = require ("../../../Constants");
const TezzerettheSeekerBase = require("../setDDF/TezzerettheSeeker");

class TezzerettheSeeker extends TezzerettheSeekerBase {
  constructor (game) {
    super(game, "Tezzeret the Seeker", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = TezzerettheSeeker;

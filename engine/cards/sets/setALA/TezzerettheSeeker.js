"use strict";
const Constants = require ("../../../Constants");
const TezzerettheSeekerBase = require("../setDDF/TezzerettheSeeker");

class TezzerettheSeeker extends TezzerettheSeekerBase {
  constructor(game) {
    super(game, "Tezzeret the Seeker", "Shards of Alara", "ALA");
  }
}

module.exports = TezzerettheSeeker;

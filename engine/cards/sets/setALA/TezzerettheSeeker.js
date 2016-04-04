"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TezzerettheSeekerBase = require("../setDDF/TezzerettheSeeker.js");

class TezzerettheSeeker extends TezzerettheSeekerBase {
  constructor(game) {
    super(game, "Tezzeret the Seeker", "Shards of Alara", "ALA");
  }
}

module.exports = TezzerettheSeeker;

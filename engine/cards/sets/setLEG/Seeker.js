"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SeekerBase = require("../set4ED/Seeker.js");

class Seeker extends SeekerBase {
  constructor(game) {
    super(game, "Seeker", "Legends", "LEG");
  }
}

module.exports = Seeker;

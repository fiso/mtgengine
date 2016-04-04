"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SaltFlatsBase = require("../setTMP/SaltFlats.js");

class SaltFlats extends SaltFlatsBase {
  constructor(game) {
    super(game, "Salt Flats", "Tempest Remastered", "TPR");
  }
}

module.exports = SaltFlats;

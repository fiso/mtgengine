"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NearheathStalkerBase = require("../setDKA/NearheathStalker.js");

class NearheathStalker extends NearheathStalkerBase {
  constructor(game) {
    super(game, "Nearheath Stalker", "WPN and Gateway", "pWPN");
  }
}

module.exports = NearheathStalker;

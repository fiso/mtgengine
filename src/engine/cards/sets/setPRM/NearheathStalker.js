"use strict";
const Constants = require ("../../../Constants");
const NearheathStalkerBase = require("../setDKA/NearheathStalker");

class NearheathStalker extends NearheathStalkerBase {
  constructor (game) {
    super(game, "Nearheath Stalker", "Magic Online Promos", "PRM");
  }
}

module.exports = NearheathStalker;

"use strict";
const Constants = require ("../../../Constants");
const NearheathStalkerBase = require("../setDKA/NearheathStalker");

class NearheathStalker extends NearheathStalkerBase {
  constructor (game) {
    super(game, "Nearheath Stalker", "Wizards Play Network 2012", "PWP12");
  }
}

module.exports = NearheathStalker;

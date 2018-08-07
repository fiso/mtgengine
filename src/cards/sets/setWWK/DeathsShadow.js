"use strict";
const Constants = require ("../../../Constants");
const DeathsShadowBase = require("../setMM3/DeathsShadow");

class DeathsShadow extends DeathsShadowBase {
  constructor (game) {
    super(game, "Death's Shadow", "Worldwake", "WWK");
  }
}

module.exports = DeathsShadow;

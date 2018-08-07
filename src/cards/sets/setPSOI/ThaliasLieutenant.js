"use strict";
const Constants = require ("../../../Constants");
const ThaliasLieutenantBase = require("../setSOI/ThaliasLieutenant");

class ThaliasLieutenant extends ThaliasLieutenantBase {
  constructor (game) {
    super(game, "Thalia's Lieutenant", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = ThaliasLieutenant;

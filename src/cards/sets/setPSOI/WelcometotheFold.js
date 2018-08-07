"use strict";
const Constants = require ("../../../Constants");
const WelcometotheFoldBase = require("../setSOI/WelcometotheFold");

class WelcometotheFold extends WelcometotheFoldBase {
  constructor (game) {
    super(game, "Welcome to the Fold", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = WelcometotheFold;

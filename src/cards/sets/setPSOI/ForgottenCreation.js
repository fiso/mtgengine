"use strict";
const Constants = require ("../../../Constants");
const ForgottenCreationBase = require("../setSOI/ForgottenCreation");

class ForgottenCreation extends ForgottenCreationBase {
  constructor (game) {
    super(game, "Forgotten Creation", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = ForgottenCreation;

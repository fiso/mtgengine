"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ForgottenAncientBase = require("../setARC/ForgottenAncient.js");

class ForgottenAncient extends ForgottenAncientBase {
  constructor(game) {
    super(game, "Forgotten Ancient", "Planechase", "HOP");
  }
}

module.exports = ForgottenAncient;

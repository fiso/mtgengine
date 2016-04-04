"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DismissBase = require("../setpARL/Dismiss.js");

class Dismiss extends DismissBase {
  constructor(game) {
    super(game, "Dismiss", "Tempest", "TMP");
  }
}

module.exports = Dismiss;

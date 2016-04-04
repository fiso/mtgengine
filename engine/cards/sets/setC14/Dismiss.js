"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DismissBase = require("../setpARL/Dismiss.js");

class Dismiss extends DismissBase {
  constructor(game) {
    super(game, "Dismiss", "Commander 2014", "C14");
  }
}

module.exports = Dismiss;

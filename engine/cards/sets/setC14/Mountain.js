"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MountainBase = require("../setATH/Mountain.js");

class Mountain extends MountainBase {
  constructor(game) {
    super(game, "Mountain", "Commander 2014", "C14");
  }
}

module.exports = Mountain;

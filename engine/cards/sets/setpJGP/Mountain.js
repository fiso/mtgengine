"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MountainBase = require("../setATH/Mountain.js");

class Mountain extends MountainBase {
  constructor(game) {
    super(game, "Mountain", "Judge Gift Program", "pJGP");
  }
}

module.exports = Mountain;

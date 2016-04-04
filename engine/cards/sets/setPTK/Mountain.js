"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MountainBase = require("../setATH/Mountain.js");

class Mountain extends MountainBase {
  constructor(game) {
    super(game, "Mountain", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = Mountain;

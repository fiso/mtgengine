"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AssassinateBase = require("../setM10/Assassinate.js");

class Assassinate extends AssassinateBase {
  constructor(game) {
    super(game, "Assassinate", "Magic 2011", "M11");
  }
}

module.exports = Assassinate;

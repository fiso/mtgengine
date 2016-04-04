"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShockBase = require("../setBTD/Shock.js");

class Shock extends ShockBase {
  constructor(game) {
    super(game, "Shock", "Magic 2012", "M12");
  }
}

module.exports = Shock;

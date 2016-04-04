"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhantasmalBearBase = require("../setDDM/PhantasmalBear.js");

class PhantasmalBear extends PhantasmalBearBase {
  constructor(game) {
    super(game, "Phantasmal Bear", "Magic 2012", "M12");
  }
}

module.exports = PhantasmalBear;

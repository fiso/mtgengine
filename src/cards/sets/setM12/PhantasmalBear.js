"use strict";
const Constants = require ("../../../Constants");
const PhantasmalBearBase = require("../setA25/PhantasmalBear");

class PhantasmalBear extends PhantasmalBearBase {
  constructor (game) {
    super(game, "Phantasmal Bear", "Magic 2012", "M12");
  }
}

module.exports = PhantasmalBear;

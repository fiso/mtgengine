"use strict";
const Constants = require ("../../../Constants");
const StoneGiantBase = require("../setDDI/StoneGiant");

class StoneGiant extends StoneGiantBase {
  constructor (game) {
    super(game, "Stone Giant", "Unlimited Edition", "2ED");
  }
}

module.exports = StoneGiant;

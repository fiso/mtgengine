"use strict";
const Constants = require ("../../../Constants");
const StoneGiantBase = require("../setCED/StoneGiant");

class StoneGiant extends StoneGiantBase {
  constructor(game) {
    super(game, "Stone Giant", "Revised Edition", "3ED");
  }
}

module.exports = StoneGiant;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StoneGiantBase = require("../setCED/StoneGiant.js");

class StoneGiant extends StoneGiantBase {
  constructor(game) {
    super(game, "Stone Giant", "Revised Edition", "3ED");
  }
}

module.exports = StoneGiant;

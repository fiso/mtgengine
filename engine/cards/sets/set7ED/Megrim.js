"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MegrimBase = require("../setDPA/Megrim.js");

class Megrim extends MegrimBase {
  constructor(game) {
    super(game, "Megrim", "Seventh Edition", "7ED");
  }
}

module.exports = Megrim;

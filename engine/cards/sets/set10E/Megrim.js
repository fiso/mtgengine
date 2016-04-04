"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MegrimBase = require("../setDPA/Megrim.js");

class Megrim extends MegrimBase {
  constructor(game) {
    super(game, "Megrim", "Tenth Edition", "10E");
  }
}

module.exports = Megrim;

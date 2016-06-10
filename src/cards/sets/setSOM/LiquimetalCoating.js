"use strict";
const Constants = require ("../../../Constants");
const LiquimetalCoatingBase = require("../setC14/LiquimetalCoating");

class LiquimetalCoating extends LiquimetalCoatingBase {
  constructor (game) {
    super(game, "Liquimetal Coating", "Scars of Mirrodin", "SOM");
  }
}

module.exports = LiquimetalCoating;

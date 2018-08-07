"use strict";
const Constants = require ("../../../Constants");
const LiquimetalCoatingBase = require("../setCM2/LiquimetalCoating");

class LiquimetalCoating extends LiquimetalCoatingBase {
  constructor (game) {
    super(game, "Liquimetal Coating", "Commander 2014", "C14");
  }
}

module.exports = LiquimetalCoating;

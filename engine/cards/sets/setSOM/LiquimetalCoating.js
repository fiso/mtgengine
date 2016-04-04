"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LiquimetalCoatingBase = require("../setC14/LiquimetalCoating.js");

class LiquimetalCoating extends LiquimetalCoatingBase {
  constructor(game) {
    super(game, "Liquimetal Coating", "Scars of Mirrodin", "SOM");
  }
}

module.exports = LiquimetalCoating;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CityofBrassBase = require("../setARN/CityofBrass.js");

class CityofBrass extends CityofBrassBase {
  constructor(game) {
    super(game, "City of Brass", "Classic Sixth Edition", "6ED");
  }
}

module.exports = CityofBrass;

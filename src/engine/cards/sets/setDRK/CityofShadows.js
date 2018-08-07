"use strict";
const Constants = require ("../../../Constants");
const CityofShadowsBase = require("../setME3/CityofShadows");

class CityofShadows extends CityofShadowsBase {
  constructor (game) {
    super(game, "City of Shadows", "The Dark", "DRK");
  }
}

module.exports = CityofShadows;

"use strict";
const Constants = require ("../../../Constants");
const WeatherseedTreefolkBase = require("../setWC99/WeatherseedTreefolk");

class WeatherseedTreefolk extends WeatherseedTreefolkBase {
  constructor (game) {
    super(game, "Weatherseed Treefolk", "Urza's Legacy", "ULG");
  }
}

module.exports = WeatherseedTreefolk;

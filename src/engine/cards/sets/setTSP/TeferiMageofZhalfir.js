"use strict";
const Constants = require ("../../../Constants");
const TeferiMageofZhalfirBase = require("../setIMA/TeferiMageofZhalfir");

class TeferiMageofZhalfir extends TeferiMageofZhalfirBase {
  constructor (game) {
    super(game, "Teferi, Mage of Zhalfir", "Time Spiral", "TSP");
  }
}

module.exports = TeferiMageofZhalfir;

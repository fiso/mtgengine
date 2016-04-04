"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TeferiMageofZhalfirBase = require("../setV11/TeferiMageofZhalfir.js");

class TeferiMageofZhalfir extends TeferiMageofZhalfirBase {
  constructor(game) {
    super(game, "Teferi, Mage of Zhalfir", "Time Spiral", "TSP");
  }
}

module.exports = TeferiMageofZhalfir;

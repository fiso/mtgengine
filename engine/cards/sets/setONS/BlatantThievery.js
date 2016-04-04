"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BlatantThieveryBase = require("../setC15/BlatantThievery.js");

class BlatantThievery extends BlatantThieveryBase {
  constructor(game) {
    super(game, "Blatant Thievery", "Onslaught", "ONS");
  }
}

module.exports = BlatantThievery;

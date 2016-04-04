"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WildcallBase = require("../setFRF/Wildcall.js");

class Wildcall extends WildcallBase {
  constructor(game) {
    super(game, "Wildcall", "Ugin's Fate promos", "FRF_UGIN");
  }
}

module.exports = Wildcall;

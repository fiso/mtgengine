"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThreeVisitsBase = require("../setME3/ThreeVisits.js");

class ThreeVisits extends ThreeVisitsBase {
  constructor(game) {
    super(game, "Three Visits", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ThreeVisits;

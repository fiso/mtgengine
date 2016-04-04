"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WateryGraveBase = require("../setGTC/WateryGrave.js");

class WateryGrave extends WateryGraveBase {
  constructor(game) {
    super(game, "Watery Grave", "Zendikar Expedition", "EXP");
  }
}

module.exports = WateryGrave;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThunderingGiantBase = require("../setBTD/ThunderingGiant.js");

class ThunderingGiant extends ThunderingGiantBase {
  constructor(game) {
    super(game, "Thundering Giant", "Urza's Saga", "USG");
  }
}

module.exports = ThunderingGiant;

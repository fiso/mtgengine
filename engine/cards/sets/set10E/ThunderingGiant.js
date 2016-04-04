"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThunderingGiantBase = require("../setBTD/ThunderingGiant.js");

class ThunderingGiant extends ThunderingGiantBase {
  constructor(game) {
    super(game, "Thundering Giant", "Tenth Edition", "10E");
  }
}

module.exports = ThunderingGiant;

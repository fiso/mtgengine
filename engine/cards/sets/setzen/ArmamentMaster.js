"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArmamentMaster extends Card {
  constructor(game) {
    super(game, "Armament Master", "Zendikar", "ZEN");
  }
}

module.exports = ArmamentMaster;

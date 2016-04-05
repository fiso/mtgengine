"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArmamentMaster extends UnimplementedCard {
  constructor(game) {
    super(game, "Armament Master", "Zendikar", "ZEN");
  }
}

module.exports = ArmamentMaster;

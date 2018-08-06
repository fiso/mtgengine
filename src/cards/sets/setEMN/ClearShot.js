"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ClearShot extends UnimplementedCard {
  constructor (game) {
    super(game, "Clear Shot", "Eldritch Moon", "EMN");
  }
}

module.exports = ClearShot;

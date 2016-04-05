"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReflectingMirror extends UnimplementedCard {
  constructor(game) {
    super(game, "Reflecting Mirror", "The Dark", "DRK");
  }
}

module.exports = ReflectingMirror;

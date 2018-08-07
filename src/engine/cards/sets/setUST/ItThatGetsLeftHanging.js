"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ItThatGetsLeftHanging extends UnimplementedCard {
  constructor (game) {
    super(game, "It That Gets Left Hanging", "Unstable", "UST");
  }
}

module.exports = ItThatGetsLeftHanging;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HarbingerofSpring extends UnimplementedCard {
  constructor(game) {
    super(game, "Harbinger of Spring", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = HarbingerofSpring;

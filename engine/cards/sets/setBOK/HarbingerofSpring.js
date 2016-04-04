"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HarbingerofSpring extends Card {
  constructor(game) {
    super(game, "Harbinger of Spring", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = HarbingerofSpring;

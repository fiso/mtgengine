"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IgnorantBliss extends Card {
  constructor(game) {
    super(game, "Ignorant Bliss", "Dissension", "DIS");
  }
}

module.exports = IgnorantBliss;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MeteorCrater extends Card {
  constructor(game) {
    super(game, "Meteor Crater", "Planeshift", "PLS");
  }
}

module.exports = MeteorCrater;

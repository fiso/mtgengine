"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MeteorCrater extends UnimplementedCard {
  constructor(game) {
    super(game, "Meteor Crater", "Planeshift", "PLS");
  }
}

module.exports = MeteorCrater;

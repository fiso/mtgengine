"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MeteorShower extends UnimplementedCard {
  constructor (game) {
    super(game, "Meteor Shower", "Masters Edition II", "ME2");
  }
}

module.exports = MeteorShower;

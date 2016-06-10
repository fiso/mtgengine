"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MeteorShower extends UnimplementedCard {
  constructor (game) {
    super(game, "Meteor Shower", "Ice Age", "ICE");
  }
}

module.exports = MeteorShower;

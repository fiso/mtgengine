"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MeteorBlast extends UnimplementedCard {
  constructor(game) {
    super(game, "Meteor Blast", "Commander 2015", "C15");
  }
}

module.exports = MeteorBlast;

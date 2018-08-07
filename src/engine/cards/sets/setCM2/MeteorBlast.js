"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MeteorBlast extends UnimplementedCard {
  constructor (game) {
    super(game, "Meteor Blast", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = MeteorBlast;

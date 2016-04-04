"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MeteorBlast extends Card {
  constructor(game) {
    super(game, "Meteor Blast", "Commander 2015", "C15");
  }
}

module.exports = MeteorBlast;

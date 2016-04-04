"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OraclesAttendants extends Card {
  constructor(game) {
    super(game, "Oracle's Attendants", "Eighth Edition", "8ED");
  }
}

module.exports = OraclesAttendants;

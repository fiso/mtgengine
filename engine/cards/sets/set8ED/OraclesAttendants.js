"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OraclesAttendants extends UnimplementedCard {
  constructor(game) {
    super(game, "Oracle's Attendants", "Eighth Edition", "8ED");
  }
}

module.exports = OraclesAttendants;

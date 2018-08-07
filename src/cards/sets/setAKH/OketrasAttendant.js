"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OketrasAttendant extends UnimplementedCard {
  constructor (game) {
    super(game, "Oketra's Attendant", "Amonkhet", "AKH");
  }
}

module.exports = OketrasAttendant;

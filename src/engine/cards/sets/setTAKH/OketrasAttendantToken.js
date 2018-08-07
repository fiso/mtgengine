"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OketrasAttendantToken extends UnimplementedCard {
  constructor (game) {
    super(game, "Oketra's Attendant Token", "Amonkhet Tokens", "TAKH");
  }
}

module.exports = OketrasAttendantToken;

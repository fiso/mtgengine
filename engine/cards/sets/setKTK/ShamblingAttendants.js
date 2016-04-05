"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShamblingAttendants extends UnimplementedCard {
  constructor(game) {
    super(game, "Shambling Attendants", "Khans of Tarkir", "KTK");
  }
}

module.exports = ShamblingAttendants;

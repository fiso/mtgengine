"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GuestList extends UnimplementedCard {
  constructor (game) {
    super(game, "Guest List", "Unstable", "UST");
  }
}

module.exports = GuestList;

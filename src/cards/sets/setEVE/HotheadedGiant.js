"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HotheadedGiant extends UnimplementedCard {
  constructor (game) {
    super(game, "Hotheaded Giant", "Eventide", "EVE");
  }
}

module.exports = HotheadedGiant;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HotheadedGiant extends Card {
  constructor(game) {
    super(game, "Hotheaded Giant", "Eventide", "EVE");
  }
}

module.exports = HotheadedGiant;

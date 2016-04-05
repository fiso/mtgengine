"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeetheUnwritten extends UnimplementedCard {
  constructor(game) {
    super(game, "See the Unwritten", "Khans of Tarkir", "KTK");
  }
}

module.exports = SeetheUnwritten;

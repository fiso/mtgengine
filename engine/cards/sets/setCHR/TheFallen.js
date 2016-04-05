"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheFallen extends UnimplementedCard {
  constructor(game) {
    super(game, "The Fallen", "Chronicles", "CHR");
  }
}

module.exports = TheFallen;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JadedResponse extends UnimplementedCard {
  constructor(game) {
    super(game, "Jaded Response", "Apocalypse", "APC");
  }
}

module.exports = JadedResponse;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sorry extends UnimplementedCard {
  constructor(game) {
    super(game, "Sorry", "Unglued", "UGL");
  }
}

module.exports = Sorry;

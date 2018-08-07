"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Acquire extends UnimplementedCard {
  constructor (game) {
    super(game, "Acquire", "IDW Comics 2014", "PI14");
  }
}

module.exports = Acquire;

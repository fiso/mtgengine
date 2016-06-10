"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Congregate extends UnimplementedCard {
  constructor (game) {
    super(game, "Congregate", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Congregate;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Griselbrand extends UnimplementedCard {
  constructor (game) {
    super(game, "Griselbrand", "Avacyn Restored", "AVR");
  }
}

module.exports = Griselbrand;

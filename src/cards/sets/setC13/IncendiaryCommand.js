"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IncendiaryCommand extends UnimplementedCard {
  constructor (game) {
    super(game, "Incendiary Command", "Commander 2013", "C13");
  }
}

module.exports = IncendiaryCommand;

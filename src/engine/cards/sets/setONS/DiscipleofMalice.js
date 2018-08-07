"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DiscipleofMalice extends UnimplementedCard {
  constructor (game) {
    super(game, "Disciple of Malice", "Onslaught", "ONS");
  }
}

module.exports = DiscipleofMalice;

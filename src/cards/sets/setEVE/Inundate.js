"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Inundate extends UnimplementedCard {
  constructor(game) {
    super(game, "Inundate", "Eventide", "EVE");
  }
}

module.exports = Inundate;

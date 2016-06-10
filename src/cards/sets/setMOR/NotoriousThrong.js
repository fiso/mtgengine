"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NotoriousThrong extends UnimplementedCard {
  constructor (game) {
    super(game, "Notorious Throng", "Morningtide", "MOR");
  }
}

module.exports = NotoriousThrong;

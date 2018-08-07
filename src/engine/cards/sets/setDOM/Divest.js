"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Divest extends UnimplementedCard {
  constructor (game) {
    super(game, "Divest", "Dominaria", "DOM");
  }
}

module.exports = Divest;

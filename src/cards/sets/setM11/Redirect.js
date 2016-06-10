"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Redirect extends UnimplementedCard {
  constructor (game) {
    super(game, "Redirect", "Magic 2011", "M11");
  }
}

module.exports = Redirect;

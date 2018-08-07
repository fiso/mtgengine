"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Redirect extends UnimplementedCard {
  constructor (game) {
    super(game, "Redirect", "Magic 2013", "M13");
  }
}

module.exports = Redirect;

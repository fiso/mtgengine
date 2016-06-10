"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Drelnoch extends UnimplementedCard {
  constructor (game) {
    super(game, "Drelnoch", "Coldsnap", "CSP");
  }
}

module.exports = Drelnoch;

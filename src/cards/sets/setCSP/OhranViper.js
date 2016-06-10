"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OhranViper extends UnimplementedCard {
  constructor (game) {
    super(game, "Ohran Viper", "Coldsnap", "CSP");
  }
}

module.exports = OhranViper;

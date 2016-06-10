"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Controvert extends UnimplementedCard {
  constructor (game) {
    super(game, "Controvert", "Coldsnap", "CSP");
  }
}

module.exports = Controvert;

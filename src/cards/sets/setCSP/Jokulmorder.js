"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Jokulmorder extends UnimplementedCard {
  constructor (game) {
    super(game, "Jokulmorder", "Coldsnap", "CSP");
  }
}

module.exports = Jokulmorder;

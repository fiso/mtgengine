"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Worship extends UnimplementedCard {
  constructor (game) {
    super(game, "Worship", "Amonkhet Invocations", "MP2");
  }
}

module.exports = Worship;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HellcarverDemon extends UnimplementedCard {
  constructor (game) {
    super(game, "Hellcarver Demon", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = HellcarverDemon;

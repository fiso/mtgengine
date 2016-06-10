"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RallytheHorde extends UnimplementedCard {
  constructor (game) {
    super(game, "Rally the Horde", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = RallytheHorde;

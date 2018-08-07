"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KeeningStone extends UnimplementedCard {
  constructor (game) {
    super(game, "Keening Stone", "Commander 2016", "C16");
  }
}

module.exports = KeeningStone;

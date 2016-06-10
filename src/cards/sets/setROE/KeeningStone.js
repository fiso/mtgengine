"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KeeningStone extends UnimplementedCard {
  constructor (game) {
    super(game, "Keening Stone", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = KeeningStone;

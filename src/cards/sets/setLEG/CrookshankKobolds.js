"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrookshankKobolds extends UnimplementedCard {
  constructor (game) {
    super(game, "Crookshank Kobolds", "Legends", "LEG");
  }
}

module.exports = CrookshankKobolds;

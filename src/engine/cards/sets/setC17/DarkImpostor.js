"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarkImpostor extends UnimplementedCard {
  constructor (game) {
    super(game, "Dark Impostor", "Commander 2017", "C17");
  }
}

module.exports = DarkImpostor;

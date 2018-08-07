"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LobeLobber extends UnimplementedCard {
  constructor (game) {
    super(game, "Lobe Lobber", "Unstable", "UST");
  }
}

module.exports = LobeLobber;

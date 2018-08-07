"use strict";
const Constants = require ("../../../Constants");
const LobotomyBase = require("../setF06/Lobotomy");

class Lobotomy extends LobotomyBase {
  constructor (game) {
    super(game, "Lobotomy", "World Championship Decks 1998", "WC98");
  }
}

module.exports = Lobotomy;

"use strict";
const Constants = require ("../../../Constants");
const LobotomyBase = require("../setF06/Lobotomy");

class Lobotomy extends LobotomyBase {
  constructor (game) {
    super(game, "Lobotomy", "World Championship Decks 2001", "WC01");
  }
}

module.exports = Lobotomy;

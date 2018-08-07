"use strict";
const Constants = require ("../../../Constants");
const LobotomyBase = require("../setF06/Lobotomy");

class Lobotomy extends LobotomyBase {
  constructor (game) {
    super(game, "Lobotomy", "Invasion", "INV");
  }
}

module.exports = Lobotomy;

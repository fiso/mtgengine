"use strict";
const Constants = require ("../../../Constants");
const LobotomyBase = require("../setpFNM/Lobotomy");

class Lobotomy extends LobotomyBase {
  constructor (game) {
    super(game, "Lobotomy", "Invasion", "INV");
  }
}

module.exports = Lobotomy;

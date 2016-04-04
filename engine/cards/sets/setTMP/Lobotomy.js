"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LobotomyBase = require("../setpFNM/Lobotomy.js");

class Lobotomy extends LobotomyBase {
  constructor(game) {
    super(game, "Lobotomy", "Tempest", "TMP");
  }
}

module.exports = Lobotomy;

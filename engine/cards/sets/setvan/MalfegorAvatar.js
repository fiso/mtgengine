"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MalfegorAvatar extends Card {
  constructor(game) {
    super(game, "Malfegor Avatar", "Vanguard", "VAN");
  }
}

module.exports = MalfegorAvatar;

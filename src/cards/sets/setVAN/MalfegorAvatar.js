"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MalfegorAvatar extends UnimplementedCard {
  constructor (game) {
    super(game, "Malfegor Avatar", "Vanguard", "VAN");
  }
}

module.exports = MalfegorAvatar;

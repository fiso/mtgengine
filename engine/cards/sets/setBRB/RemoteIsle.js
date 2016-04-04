"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RemoteIsle extends UnimplementedCard {
  constructor(game) {
    super(game, "Remote Isle", "Battle Royale Box Set", "BRB");
  }
}

module.exports = RemoteIsle;

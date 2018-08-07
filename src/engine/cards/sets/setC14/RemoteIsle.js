"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RemoteIsle extends UnimplementedCard {
  constructor (game) {
    super(game, "Remote Isle", "Commander 2014", "C14");
  }
}

module.exports = RemoteIsle;

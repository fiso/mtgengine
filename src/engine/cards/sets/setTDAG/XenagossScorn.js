"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class XenagossScorn extends UnimplementedCard {
  constructor (game) {
    super(game, "Xenagos's Scorn", "Defeat a God", "TDAG");
  }
}

module.exports = XenagossScorn;

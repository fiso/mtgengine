"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class XenagossStrike extends UnimplementedCard {
  constructor (game) {
    super(game, "Xenagos's Strike", "Defeat a God", "TDAG");
  }
}

module.exports = XenagossStrike;

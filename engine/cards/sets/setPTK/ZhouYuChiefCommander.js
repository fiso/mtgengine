"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ZhouYuChiefCommander extends Card {
  constructor(game) {
    super(game, "Zhou Yu, Chief Commander", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ZhouYuChiefCommander;

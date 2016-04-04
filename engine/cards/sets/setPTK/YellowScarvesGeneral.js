"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class YellowScarvesGeneral extends Card {
  constructor(game) {
    super(game, "Yellow Scarves General", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = YellowScarvesGeneral;

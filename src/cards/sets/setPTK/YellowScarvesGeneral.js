"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YellowScarvesGeneral extends UnimplementedCard {
  constructor (game) {
    super(game, "Yellow Scarves General", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = YellowScarvesGeneral;

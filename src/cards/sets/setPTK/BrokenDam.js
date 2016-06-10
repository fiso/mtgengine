"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrokenDam extends UnimplementedCard {
  constructor (game) {
    super(game, "Broken Dam", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = BrokenDam;

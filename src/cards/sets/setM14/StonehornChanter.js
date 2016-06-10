"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StonehornChanter extends UnimplementedCard {
  constructor (game) {
    super(game, "Stonehorn Chanter", "Magic 2014 Core Set", "M14");
  }
}

module.exports = StonehornChanter;

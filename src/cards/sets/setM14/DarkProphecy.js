"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarkProphecy extends UnimplementedCard {
  constructor (game) {
    super(game, "Dark Prophecy", "Magic 2014 Core Set", "M14");
  }
}

module.exports = DarkProphecy;

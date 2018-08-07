"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NecrogenScudder extends UnimplementedCard {
  constructor (game) {
    super(game, "Necrogen Scudder", "Magic 2015", "M15");
  }
}

module.exports = NecrogenScudder;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElderofLaurels extends UnimplementedCard {
  constructor (game) {
    super(game, "Elder of Laurels", "Innistrad", "ISD");
  }
}

module.exports = ElderofLaurels;

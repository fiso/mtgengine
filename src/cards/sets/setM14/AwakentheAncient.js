"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AwakentheAncient extends UnimplementedCard {
  constructor (game) {
    super(game, "Awaken the Ancient", "Magic 2014", "M14");
  }
}

module.exports = AwakentheAncient;

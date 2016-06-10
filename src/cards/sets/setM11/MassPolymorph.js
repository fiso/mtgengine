"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MassPolymorph extends UnimplementedCard {
  constructor (game) {
    super(game, "Mass Polymorph", "Magic 2011", "M11");
  }
}

module.exports = MassPolymorph;

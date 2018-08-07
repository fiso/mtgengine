"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrookofCondemnation extends UnimplementedCard {
  constructor (game) {
    super(game, "Crook of Condemnation", "Hour of Devastation", "HOU");
  }
}

module.exports = CrookofCondemnation;

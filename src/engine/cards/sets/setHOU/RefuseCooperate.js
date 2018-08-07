"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RefuseCooperate extends UnimplementedCard {
  constructor (game) {
    super(game, "Refuse // Cooperate", "Hour of Devastation", "HOU");
  }
}

module.exports = RefuseCooperate;
